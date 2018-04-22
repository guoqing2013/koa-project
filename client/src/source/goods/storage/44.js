'use strict';
/**
 * @param {?} module
 * @param {?} exports
 * @param {?} __webpack_require__
 * @return {undefined}
 */
function f44(module, exports, __webpack_require__) {
  /**
   * @param {?} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @return {?}
   */
  function updatePresenterWindow() {
    var author_uri = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.pathname;
    return author_uri.substr(author_uri.lastIndexOf("/") + 1, author_uri.length);
  }
  /**
   * @return {?}
   */
  function SortableComposition() {
    return (0, _noframeworkWaypoints2.default)(window, "_global.business.userInfo", {});
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function isPromise(value) {
    return (0, _classlist2.default)(value) && (0, _prepareStyleProperties2.default)(value.then);
  }
  /**
   * @param {number} length
   * @return {?}
   */
  function randomString(length) {
    return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1);
  }
  /**
   * @param {!Object} codeError
   * @param {string} modules
   * @return {undefined}
   */
  function normalizeCodeError(codeError, modules) {
    if (!(codeError instanceof B)) {
      var fsmError = codeError.msg || modules;
      if (fsmError) {
        _deepAssign2.default.error(fsmError);
      }
    }
  }
  /**
   * @param {!Object} values
   * @return {?}
   */
  function _extractChildren(values) {
    var localModel = {};
    if ((0, _classlist2.default)(values) && (0, _UiRippleInk2.default)(arguments.length <= 1 ? void 0 : arguments[1])) {
      (arguments.length <= 1 ? void 0 : arguments[1]).forEach(function(val) {
        if ((0, _UiIcon2.default)(val)) {
          localModel[val] = values.hasOwnProperty(val) ? values[val] : void 0;
        } else {
          if ((0, _classlist2.default)(val)) {
            Object.keys(val).forEach(function(key) {
              if ((0, _prepareStyleProperties2.default)(val[key])) {
                localModel[key] = values.hasOwnProperty(key) ? val[key](values[key]) : void 0;
              } else {
                localModel[key] = values.hasOwnProperty(key) ? values[key] : val[key];
              }
            });
          }
        }
      });
    }
    return localModel;
  }
  /**
   * @param {?} notify
   * @param {?} e
   * @param {?} data
   * @return {?}
   */
  function load(notify, e, data) {
    var state = this;
    var notKeyPress = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    return notify(e).then(function(params) {
      var value = params.items;
      var paginator = params.paginator;
      var index = paginator.totalCount;
      return notKeyPress && (value = (0, __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__.parseValByRatio)(value, {
        stock : -3,
        price : -2
      })), build({
        list : value,
        totalItem : index || 0,
        emptyLabel : index > 0 ? null : "\u672a\u67e5\u627e\u5230\u4efb\u4f55\u6570\u636e"
      }, data);
    }).catch(function(jsonSeed) {
      return state.setState({
        list : [],
        totalItem : 0,
        current : 1,
        emptyLabel : "\u6570\u636e\u52a0\u8f7d\u51fa\u9519"
      }), _deepAssign2.default.error(jsonSeed.msg || "\u6570\u636e\u52a0\u8f7d\u51fa\u9519"), jsonSeed;
    }).finally(function() {
      state.setState({
        loading : false
      });
    });
  }
  /**
   * @return {undefined}
   */
  function error() {
    var message = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ("object" === ("undefined" == typeof Raven ? "undefined" : showLoginFailed(Raven))) {
      window.Raven.captureMessage(message, data);
    }
  }
  /**
   * @param {?} callback
   * @return {?}
   */
  function CalendarTitle(callback) {
    var index = (0, __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__.deepJsonParse)(callback);
    return (0, _UiIcon2.default)(index) 
    ? 
    index || settings.DEFAULT_IMAGE 
    :


     (0, _UiRippleInk2.default)(index) 
     ? 
     (0, _noframeworkWaypoints2.default)(index, "[0].url", settings.DEFAULT_IMAGE) 
     : settings.DEFAULT_IMAGE;
  }
  /**
   * @param {!NodeList} data
   * @param {number} count
   * @return {?}
   */
  function value(data, count) {
    if (!(0, _UiRippleInk2.default)(data) || !(0, _normalizeDataUri2.default)(count)) {
      return data;
    }
    if (data.length * count <= 1 || data.length <= count) {
      return data;
    }
    /** @type {number} */
    var n = parseInt(data.length / (count - 1), 10);
    var m = (0, _custom2.default)(data, n);
    var j = m.length;
    var f = m.slice(0, j - 1).map(function(canCreateDiscussions) {
      return canCreateDiscussions[0];
    });
    var args = m[j - 1];
    return f.length === count - 1 ? f.concat([args[args.length - 1]]) : f.concat(1 === args.length ? [args[0]] : [args[0], args[args.length - 1]]);
  }
  /**
   * @param {!Function} e
   * @return {?}
   */
  function setup(e) {
    /**
     * @param {?} type
     * @return {?}
     */
    function check(type) {
      return (0, _normalizeDataUri2.default)(type) ? (0, _AppDownload2.default)((0, _buildPageNumber2.default)(Date.now(), type)) : null;
    }
    /**
     * @return {?}
     */
    function init() {
      /** @type {number} */
      var _len8 = arguments.length;
      /** @type {!Array} */
      var args = Array(_len8);
      /** @type {number} */
      var _key8 = 0;
      for (; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      var url = (0, _prepareStyleProperties2.default)(callback) ? callback.apply(void 0, args) : args[0];
      var options = cache[url] || {};
      var injectAs = options.expire;
      var value = options.value;
      var onComplete = options.shouldReturnPromise;
      if ((0, _normalizeDataUri2.default)(injectAs) && Date.now() > injectAs && (cache[url] = void 0), void 0 !== cache[url]) {
        return onComplete ? Promise.resolve(value) : value;
      }
      var promise = e.apply(this, args);
      return isPromise(promise) ? promise.then(function(command_module_id) {
        return cache[url] = {
          value : command_module_id,
          expire : check(expire),
          shouldReturnPromise : true
        }, command_module_id;
      }, function(fnError) {
        return Promise.reject(fnError);
      }) : (cache[url] = {
        value : promise,
        expire : check(expire)
      }, promise);
    }
    var self = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var cache = {};
    var callback = self.resolver;
    var expire = self.expire;
    return init.cache = cache, init;
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  var _prepareStyleProperties = __webpack_require__(40);
  var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
  var _normalizeDataUri = __webpack_require__(27);
  var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
  var _UiIcon = __webpack_require__(61);
  var _UiIcon2 = _interopRequireDefault(_UiIcon);
  var _classlist = __webpack_require__(47);
  var _classlist2 = _interopRequireDefault(_classlist);
  var _UiRippleInk = __webpack_require__(17);
  var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
  var _custom = __webpack_require__(132);
  var _custom2 = _interopRequireDefault(_custom);
  var _noframeworkWaypoints = __webpack_require__(15);
  var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
  /** @type {function(?): ?} */
  var showLoginFailed = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(Raven) {
    return typeof Raven;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var build = Object.assign || function(result) {
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      var value = arguments[i];
      var name;
      for (name in value) {
        if (Object.prototype.hasOwnProperty.call(value, name)) {
          result[name] = value[name];
        }
      }
    }
    return result;
  };
  /** @type {function(): ?} */
  exports.getLastPath = updatePresenterWindow;
  /** @type {function(): ?} */
  exports.getUserInfo = SortableComposition;
  /** @type {function(?): ?} */
  exports.isPromise = isPromise;
  /** @type {function(number): ?} */
  exports.randomString = randomString;
  /** @type {function(!Object, string): undefined} */
  exports.handleFormFail = normalizeCodeError;
  /** @type {function(!Object): ?} */
  exports.easyPick = _extractChildren;
  /** @type {function(?, ?, ?): ?} */
  exports.handleList = load;
  /** @type {function(): undefined} */
  exports.captureMessage = error;
  /** @type {function(?): ?} */
  exports.compatibleImg = CalendarTitle;
  /** @type {function(!NodeList, number): ?} */
  exports.splitToEqualLen = value;
  /** @type {function(!Function): ?} */
  exports.memorize = setup;
  var _deepAssign = __webpack_require__(11);
  var _deepAssign2 = _interopRequireDefault(_deepAssign);
  var _AboutPage = __webpack_require__(22);
  var _AboutPage2 = _interopRequireDefault(_AboutPage);
  var _AppDownload = __webpack_require__(121);
  var _AppDownload2 = _interopRequireDefault(_AppDownload);
  var _buildPageNumber = __webpack_require__(145);
  var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
  var settings = __webpack_require__(142);
  var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__ = __webpack_require__(57);
  var B = _AboutPage2.default.SubmissionError;
  exports.default = {
    getLastPath : updatePresenterWindow,
    getUserInfo : SortableComposition,
    isPromise : isPromise,
    easyPick : _extractChildren,
    handleList : load,
    captureMessage : error,
    compatibleImg : CalendarTitle,
    splitToEqualLen : value
  };
}
;