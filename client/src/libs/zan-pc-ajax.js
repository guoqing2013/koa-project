'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global Raven */

var _zanAjax = require('zan-ajax');

var _zanAjax2 = _interopRequireDefault(_zanAjax);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = function () {
  if (typeof window !== 'undefined') {
    return window;
  } else if (typeof global !== 'undefined') {
    return global;
  } else if (typeof self !== 'undefined') {
    return self;
  }

  return {};
}();

/**
 * 确保请求的参数正确
 */
function normalizeArguments(url, options) {
  if ((0, _isString2.default)(url)) {
    options = options || {};
    options.url = url;
    if ((0, _isString2.default)(options.url)) return options;
  } else if ((0, _isPlainObject2.default)(url) && (0, _isString2.default)(url.url)) {
    return url;
  }

  throw new TypeError('ajax expects a url or an options object');
}

var ajaxConfig = {
  transformRequest: function transformRequest(config) {
    var disableCsrfToken = config.disableCsrfToken;

    var csrfToken = (global._global || {}).csrf_token; // eslint-disable-line

    if (csrfToken && !disableCsrfToken) {
      config.data = config.data || {};

      if (!(0, _isPlainObject2.default)(config.data)) {
        throw new TypeError('expects `data` to be a plain object when csrf token is enabled, but got ' + JSON.stringify(config.data));
      }

      config.data.csrf_token = csrfToken;
    }

    if (config.xhrFields && config.xhrFields.withCredentials) {
      config.withCredentials = true;
      delete config.xhrFields;
    }

    return config;
  }
};

function isJSONResponse(response) {
  return response.isJSONP || response.config && response.config.responseType === 'json';
}

function sendSentryWarning() {
  var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var resp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ajaxOptions = arguments[2];
  var errMsg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var module = (global._global || {}).module || 'global';
  var url = ajaxOptions.url;
  var type = (ajaxOptions.type || 'GET').toUpperCase();
  // eslint-disable-next-line
  (typeof Raven === 'undefined' ? 'undefined' : _typeof(Raven)) === 'object' && Raven.captureMessage(module + ':' + type + ':' + url + ': ' + errMsg, {
    logger: 'ajax',
    level: 'warning',
    extra: {
      resp: resp,
      ajaxOptions: ajaxOptions
    },
    tags: {
      Type: 'Ajax'
    }
  });
}

function ajax(url, options) {
  var ajaxOptions = normalizeArguments(url, options);
  // 默认超时10秒
  if (ajaxOptions.timeout === undefined) {
    ajaxOptions.timeout = 10000;
  }
  var promise = (0, _zanAjax2.default)(ajaxOptions, ajaxConfig);
  var shouldReturnRawResponse = !!ajaxOptions.rawResponse;

  return promise.then(function (rawResp) {
    var resp = rawResp.data;

    // 返回值是json的时候处理code，其他情况不处理
    if (isJSONResponse(rawResp)) {
      if (resp.errcode !== void 0) {
        resp.code = resp.errcode;
        resp.msg = resp.errmsg;
      }

      // old api have resp.code === undefined
      // Java APIs set code to 200 if success
      if (+resp.code === 0 || resp.code === void 0 || resp.success && +resp.code === 200) {
        return Promise.resolve({
          json: true,
          resp: resp,
          req: ajaxOptions  //guoqing add
        });
      }

      return Promise.reject({
        json: true,
        resp: resp,
        req: ajaxOptions  //guoqing add
      });
    }

    return Promise.resolve({
      json: false,
      resp: resp,
      req: ajaxOptions  //guoqing add
    });
  }, function (rawResp) {
    var error = rawResp.response;

    if (isJSONResponse(rawResp)) {
      if (error && error.data) {
        return Promise.reject({
          json: true,
          resp: error.data,
          req: ajaxOptions  //guoqing add
        });
      }

      var msg = rawResp.message || '网络请求错误';
      var code = 99999;

      return Promise.reject({
        json: true,
        resp: {
          msg: msg,
          code: code
        },
        req: ajaxOptions  //guoqing add
      });
    }

    return Promise.reject({
      json: false,
      resp: error || rawResp.message,
      req: ajaxOptions  //guoqing add
    });
  }).then(function (resp) {
    if (shouldReturnRawResponse || !resp.json) {
      return resp.resp;
    }

    return resp.resp.data;
  }, function (resp) {
    if (shouldReturnRawResponse || !resp.json) {
      sendSentryWarning(resp.req, resp.resp, ajaxOptions);
      return Promise.reject(resp.resp);
    }
    sendSentryWarning(resp.req, resp.resp, ajaxOptions, resp.resp.desc || resp.resp.msg);
    return Promise.reject(resp.resp.msg);
  });
}

ajax.CancelToken = _zanAjax2.default.CancelToken;
ajax.isCancel = _zanAjax2.default.isCancel;

// Node does not support ES module
module.exports = ajax;

// For TypeScript
module.exports.default = ajax;