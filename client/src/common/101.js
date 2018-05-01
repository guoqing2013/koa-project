101: function(e, t, n) {
    "use strict";
    function r(e) {
        switch (e.arrayFormat) {
        case "index":
            return function(t, n, r) {
                return null === n ? [a(t, e), "[", r, "]"].join("") : [a(t, e), "[", a(r, e), "]=", a(n, e)].join("")
            }
            ;
        case "bracket":
            return function(t, n) {
                return null === n ? a(t, e) : [a(t, e), "[]=", a(n, e)].join("")
            }
            ;
        default:
            return function(t, n) {
                return null === n ? a(t, e) : [a(t, e), "=", a(n, e)].join("")
            }
        }
    }
    function o(e) {
        var t;
        switch (e.arrayFormat) {
        case "index":
            return function(e, n, r) {
                if (t = /\[(\d*)\]$/.exec(e),
                e = e.replace(/\[\d*\]$/, ""),
                !t)
                    return void (r[e] = n);
                void 0 === r[e] && (r[e] = {}),
                r[e][t[1]] = n
            }
            ;
        case "bracket":
            return function(e, n, r) {
                return t = /(\[\])$/.exec(e),
                e = e.replace(/\[\]$/, ""),
                t ? void 0 === r[e] ? void (r[e] = [n]) : void (r[e] = [].concat(r[e], n)) : void (r[e] = n)
            }
            ;
        default:
            return function(e, t, n) {
                if (void 0 === n[e])
                    return void (n[e] = t);
                n[e] = [].concat(n[e], t)
            }
        }
    }
    function a(e, t) {
        return t.encode ? t.strict ? l(e) : encodeURIComponent(e) : e
    }
    function i(e) {
        return Array.isArray(e) ? e.sort() : "object" == typeof e ? i(Object.keys(e)).sort(function(e, t) {
            return Number(e) - Number(t)
        }).map(function(t) {
            return e[t]
        }) : e
    }
    function u(e) {
        var t = e.indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }
    function s(e, t) {
        t = c({
            arrayFormat: "none"
        }, t);
        var n = o(t)
          , r = Object.create(null);
        return "string" != typeof e ? r : (e = e.trim().replace(/^[?#&]/, "")) ? (e.split("&").forEach(function(e) {
            var t = e.replace(/\+/g, " ").split("=")
              , o = t.shift()
              , a = t.length > 0 ? t.join("=") : void 0;
            a = void 0 === a ? null : f(a),
            n(f(o), a, r)
        }),
        Object.keys(r).sort().reduce(function(e, t) {
            var n = r[t];
            return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = i(n) : e[t] = n,
            e
        }, Object.create(null))) : r
    }
    var l = n(187)
      , c = n(153)
      , f = n(212);
    t.extract = u,
    t.parse = s,
    t.stringify = function(e, t) {
        t = c({
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        }, t),
        !1 === t.sort && (t.sort = function() {}
        );
        var n = r(t);
        return e ? Object.keys(e).sort(t.sort).map(function(r) {
            var o = e[r];
            if (void 0 === o)
                return "";
            if (null === o)
                return a(r, t);
            if (Array.isArray(o)) {
                var i = [];
                return o.slice().forEach(function(e) {
                    void 0 !== e && i.push(n(r, e, i.length))
                }),
                i.join("&")
            }
            return a(r, t) + "=" + a(o, t)
        }).filter(function(e) {
            return e.length > 0
        }).join("&") : ""
    }
    ,
    t.parseUrl = function(e, t) {
        return {
            url: e.split("?")[0] || "",
            query: s(u(e), t)
        }
    }
},