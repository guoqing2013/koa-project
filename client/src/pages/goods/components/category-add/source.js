function u(e) {
    var t = function(t) {
        function n() {
            var e, t, r, i;
            o(this, n);
            for (var u = arguments.length, s = Array(u), l = 0; l < u; l++)
                s[l] = arguments[l];
            return t = r = a(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(s))),
            r.state = {
                disabled: !1
            },
            r.defaultProps = {
                hide: !1
            },
            i = t,
            a(r, i)
        }
        return i(n, t),
        f(n, [{
            key: "getNewProps",
            value: function() {
                var e = this.props
                  , t = e.className
                  , n = e.onClick
                  , r = this.state.disabled;
                return Object.assign({}, this.props, {
                    className: (0,
                    y.default)(t, {
                        "no-auth": r
                    }),
                    onClick: function(e) {
                        return r ? (e.preventDefault(),
                        e.stopPropagation(),
                        !1) : (n && (0,
                        l.default)(n) && n(e),
                        !r)
                    }
                })
            }
        }, {
            key: "componentWillMount",
            value: function() {
                this.setState({
                    disabled: !w.default.getWidgetAccessibleStatus(this.props.name)
                })
            }
        }, {
            key: "render",
            value: function() {
                var t = this.props
                  , n = t.children
                  , r = t.name
                  , o = t.hide
                  , a = this.state.disabled
                  , i = this.getNewProps();
                return a && o ? null : h.default.createElement(e, c({}, i, {
                    disabled: i.disabled || a
                }), n || r)
            }
        }]),
        n
    }(p.PureComponent || p.Component);
    return t.propTypes = {
        hide: v.default.bool
    },
    t.displayName = "Samified(" + w.default.getComponentDisplayName(e) + ")",
    t
}
Object.defineProperty(t, "__esModule", {
    value: !0
});
var s = n(124)
  , l = r(s)
  , c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , f = function() {
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
}()
  , d = function(e, t) {
    return Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
        }
    }))
}(["\n  .no-auth {\n    color: #bbb !important;\n    cursor: not-allowed !important;\n  }\n"], ["\n  .no-auth {\n    color: #bbb !important;\n    cursor: not-allowed !important;\n  }\n"]);
t.default = u;
var p = n(1)
  , h = r(p)
  , m = n(3)
  , v = r(m)
  , g = n(4)
  , y = r(g)
  , b = n(126)
  , _ = n(267)
  , w = r(_);
(0,
b.injectGlobal)(d),
e.exports = t.default
}