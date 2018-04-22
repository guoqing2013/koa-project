 function f4517(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e) {
        var t = [{
            title: "商品名称",
            width: 30,
            bodyRender: function(e) {
                return u.default.createElement(p.default, {
                    name: e.name,
                    photoUrl: (0, f.compatibleImg)(e.photoUrl),
                    skuNo: e.skuNo
                })
            }
        }, {
            title: "规格",
            width: 9,
            bodyRender: function(e) {
                return e.specifications || "-"
            }
        }, {
            title: "商品分类",
            bodyRender: function(t) {
                return e.id2cat[t.categoryId]
            }
        }, {
            title: "销售渠道",
            bodyRender: function(e) {
                return {
                    1: "未分配渠道",
                    2: "门店",
                    4: "网店",
                    6: u.default.createElement("p", {
                        style: {
                            lineHeight: 1.5
                        }
                    }, "门店", u.default.createElement("br", null), "网店")
                }[e.sellChannel]
            }
        }, {
            title: "单位",
            name: "unit"
        }, {
            title: "可售库存",
            name: "sellStockCount"
        }, {
            title: "操作",
            width: "160px",
            bodyRender: function(e) {
                var t = e.skuId
                  , n = u.default.createElement(c.Link, {
                    key: "edit",
                    blank: !0,
                    href: "/goods/goods/storage/#/edit/" + t,
                    name: "编辑"
                })
                  , r = u.default.createElement(c.Link, {
                    key: "store",
                    blank: !0,
                    href: "/goods/goods/store/#/add/" + t,
                    name: "发到门店"
                })
                  , o = u.default.createElement(c.Link, {
                    key: "shop",
                    blank: !0,
                    href: "/goods/goods/shop/#/addSku/" + t,
                    name: "发到网店"
                })
                  , a = {
                    1: [n, r, o],
                    2: [n, o],
                    4: [n, r],
                    6: [n]
                };
                return u.default.createElement(v.default, {
                    actions: a[e.sellChannel]
                })
            }
        }];
        return u.default.createElement(l.default, a({
            className: "storage-table",
            columns: t,
            autoStick: !0
        }, e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ;
    t.default = o;
    var i = n(2)
      , u = r(i)
      , s = n(56)
      , l = r(s)
      , c = n(106)
      , f = n(44)
      , d = n(608)
      , p = r(d)
      , h = n(983)
      , v = r(h);
    e.exports = t.default
}