function f70(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function u(e) {
        var t = e.children
          , n = e.className;
        return g.default.createElement("div", {
            className: (0,
            w.default)("page-block", n)
        }, t)
    }
    function s(e) {
        var t = e.children
          , n = e.className;
        return g.default.createElement(u, {
            className: (0,
            w.default)("header", n)
        }, t)
    }
    function l(e) {
        var t = e.children
          , n = e.className;
        return g.default.createElement(u, {
            className: (0,
            w.default)("content", n)
        }, t)
    }
    function c(e) {
        var t = e.className;
        return g.default.createElement("div", {
            className: (0,
            w.default)("page", t)
        }, e.children)
    }
    function f(e) {
        var t = e.className;
        return g.default.createElement("div", {
            className: (0,
            w.default)("summary", t)
        }, e.children)
    }
    function d(e) {
        var t = e.className;
        return g.default.createElement("div", {
            className: (0,
            w.default)("header__action", t)
        }, e.children)
    }
    function p(e) {
        var t = e.className
          , n = e.sticky
          , r = (0,
        w.default)("footer__action", t, {
            "footer__action--sticky": n
        });
        return g.default.createElement("div", {
            className: r
        }, e.children)
    }
    function h(e) {
        var t = e.className
          , n = e.title;
        return g.default.createElement("div", {
            className: (0,
            w.default)("block-header", t)
        }, n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Container = void 0;
    var v = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }();
    t.default = u,
    t.Header = s,
    t.Content = l,
    t.Page = c,
    t.Summary = f,
    t.HeaderAction = d,
    t.FooterAction = p,
    t.BlockHeader = h;
    var m = n(2)
      , g = r(m)
      , y = n(4)
      , b = r(y)
      , _ = n(3)
      , w = r(_)
      , x = n(37)
      , O = r(x);
    n(148);
    var E = t.Container = function(e) {
        function t() {
            var e, n, r, i;
            o(this, t);
            for (var u = arguments.length, s = Array(u), l = 0; l < u; l++)
                s[l] = arguments[l];
            return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
            r.state = {
                loading: !1
            },
            r.childContextTypes = {
                showLoading: b.default.func,
                hideLoading: b.default.func
            },
            r.showLoading = function() {
                r.setState({
                    loading: !0
                })
            }
            ,
            r.hideLoading = function() {
                r.setState({
                    loading: !1
                })
            }
            ,
            i = n,
            a(r, i)
        }
        return i(t, e),
        v(t, [{
            key: "getChildContext",
            value: function() {
                return {
                    showLoading: this.showLoading,
                    hideLoading: this.hideLoading
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.state
                  , t = this.props
                  , n = t.children
                  , r = t.className;
                return g.default.createElement(O.default, {
                    className: "container-loading",
                    show: e.loading
                }, g.default.createElement("div", {
                    className: (0,
                    w.default)("container", r)
                }, n))
            }
        }]),
        t
    }(g.default.Component);
    E.childContextTypes = {
        showLoading: b.default.func,
        hideLoading: b.default.func
    },
    E.propTypes = {
        children: b.default.node.isRequired
    },
    u.propTypes = {
        children: b.default.node
    }
}