608: function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e) {
        var t = {
            lock: e.skuLock,
            warning: e.stockLowWarning,
            negative: e.stockNum < 0
        }
          , n = {
            lock: "盘点锁定",
            warning: "低库存",
            negative: "负库存"
        }
          , r = {
            lock: e.showLock,
            warning: e.showWarning,
            negative: e.showNegative
        }
          , o = Object.keys(t).filter(function(e) {
            return t[e]
        }).map(function(e) {
            return r[e] && u.default.createElement("span", {
                key: e,
                className: "meta meta--" + e
            }, n[e])
        })
          , a = (0,
        l.compatibleImg)(e.photoUrl);
        return u.default.createElement("div", {
            className: f.default.index
        }, e.showCover && u.default.createElement(s.LazyImage, {
            className: "cover",
            height: e.height,
            width: e.width,
            offset: "200",
            alt: "商品图片",
            src: a,
            fullfill: {
                rule: e.rule
            },
            placeholder: u.default.createElement("div", {
                className: "retail-image-placeholder"
            })
        }), u.default.createElement("div", {
            className: "info"
        }, u.default.createElement("p", {
            className: "limit"
        }, e.name || e.productName, e.showSpec && e.specifications && 2 !== e.channel && u.default.createElement("span", {
            className: "gray"
        }, "(", e.specifications, ")")), e.showSpec && 2 === e.channel && u.default.createElement("p", {
            className: "gray"
        }, e.specifications), e.skuNo && u.default.createElement("p", {
            className: "cat"
        }, e.skuNo), o && u.default.createElement("p", {
            className: "meta-list"
        }, o)))
    }
    function a(e) {
        return u.default.createElement(o, e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = o,
    t.StockGoodsCell = a;
    var i = n(2)
      , u = r(i)
      , s = n(614)
      , l = n(44);
    n(900);
    var c = n(899)
      , f = r(c);
    o.defaultProps = {
        showCover: !0,
        showSpec: !1,
        height: 60,
        width: 60,
        rule: "!120x120q100.png"
    },
    a.defaultProps = {
        showCover: !1
    }
},