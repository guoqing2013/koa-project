function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = t;
        if (!(0,
        m.default)(e)) {
            if ((0,
            h.default)(e) && (0,
            m.default)(e.url))
                return e;
            throw new TypeError("carmen-ajax expects a url or an options object")
        }
        if (n.url = e,
        (0,
        m.default)(n.url))
            return n
    }
    function a(e) {
        return e.isJSONP || e.config && "json" === e.config.responseType
    }
    function i(e, t, n) {
        return t || n ? (0,
        P.mapKeyAndValue)(e, t ? P.transFn : w.default, n ? P.xssFn : w.default) : e
    }
    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = (0,
        y.default)(t, "error_response.msg", "unknown");
        "object" === ("undefined" == typeof Raven ? "undefined" : c(Raven)) && Raven.captureMessage(n + " " + e.method.toUpperCase() + " " + e.url, {
            level: "warning",
            extra: {
                resp: t,
                req: e
            },
            tags: {
                Type: "CarmenAjax"
            }
        })
    }
    function l(e, t) {
        var n = o(e, t)
          , r = !(!1 === n.transform)
          , c = !(!1 === n.needFilterXss);
        n.data = s({
            retailSource: "WEB-RETAIL-AJAX"
        }, n.data),
        r && (n.data = (0,
        P.mapKeyAndValue)(n.data, _.default));
        var f = !!n.rawResponse
          , p = n
          , h = (0,
        d.default)(n, S);
        return void 0 === n.timeout && (n.timeout = 3e4),
        h.then(function(e) {
            var t = e.data;
            return a(e) ? e.status >= 200 && e.status < 300 && !t.hasOwnProperty("error_response") ? Promise.resolve({
                json: !0,
                resp: i(t, r, c)
            }) : Promise.reject({
                json: !0,
                resp: t,
                req: p
            }) : Promise.resolve({
                json: !1,
                resp: i(t, r, c)
            })
        }, function(e) {
            var t = e.data || e;
            return a(t),
            Promise.reject({
                json: !0,
                resp: t,
                req: p
            })
        }).then(function(e) {
            return f || !e.json ? e.resp : e.resp.response
        }, function(e) {
            var t = n.retry;
            if (t) {
                if (n.__retryCount = n.__retryCount || 0,
                (0,
                E.default)(t) && t > n.__retryCount)
                    return n.__retryCount += 1,
                    l(n);
                if (!(0,
                E.default)(t) && !n.__isRetryRequest)
                    return n.__isRetryRequest = !0,
                    l(n)
            }
            if (f || !e.json)
                return u(e.req, e.resp),
                Promise.reject(e.resp);
            u(e.req, e.resp);
            var o = (0,
            y.default)(e, "resp.error_response");
            return r && o && (e.resp.error_response = i(o, !0, !1)),
            Promise.reject(e.resp.error_response || e.resp)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , f = n(253)
      , d = r(f)
      , p = n(309)
      , h = r(p)
      , v = n(577)
      , m = r(v)
      , g = n(304)
      , y = r(g)
      , b = n(1029)
      , _ = r(b)
      , x = n(190)
      , w = r(x)
      , C = n(575)
      , E = r(C)
      , P = n(494)
      , k = function(e) {
        return void 0 !== k ? k : {}
    }()
      , S = {
        transformRequest: function(e) {
            return e.xhrFields && e.xhrFields.withCredentials && (e.withCredentials = !0,
            e.noXRequestedWithHeader = !0,
            delete e.xhrFields),
            e
        }
    };
    l.CancelToken = d.default.CancelToken,
    l.isCancel = d.default.isCancel,
    t.default = l,
    e.exports = t.default
}