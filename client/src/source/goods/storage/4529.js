function f4520(e, t, n) {
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var u = n(112)
      , s = r(u)
      , l = n(664)
      , c = r(l)
      , f = n(19)
      , d = r(f)
      , p = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , h = function() {
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
      , v = n(2)
      , m = r(v)
      , g = n(11)
      , y = r(g)
      , b = n(106)
      , _ = n(1650)
      , w = r(_)
      , x = n(70)
      , O = n(2646)
      , E = r(O)
      , S = n(686)
      , C = r(S)
      , k = n(44)
      , P = n(3338)
      , D = function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }(P)
      , j = n(2654)
      , T = n(4515)
      , M = r(T)
      , I = n(4518)
      , N = r(I)
      , R = n(4516)
      , A = r(R)
      , F = n(4517)
      , L = r(F)
      , z = n(4519)
      , U = n(4191)
      , B = r(U)
      , H = {
        nameOrSkuNo: "",
        categoryIds: null,
        sellingChannel: ""
    }
      , W = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            n.filters = H,
            n.onFilterChange = function(e) {
                n.filters = e,
                n.loadList({
                    current: 1
                })
            }
            ,
            n.onTableSelected = function(e) {
                n.setState({
                    selected: e
                })
            }
            ,
            n.loadList = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = n.state
                  , r = {
                    current: e.current || t.current
                }
                  , o = p({}, r, n.filters, {
                    pageNo: r.current,
                    attributes: [1, 3]
                });
                !(0,
                d.default)(n.filters.categoryIds) && (o.categoryIds = [o.categoryIds]),
                n.setState({
                    loading: !0,
                    emptyLabel: "数据正在加载中"
                }),
                w.default.setQuery(p({}, w.default.getQuery(), {
                    current: r.current
                })),
                k.handleList.call(n, D.loadList, o, r).then(function(e) {
                    e && e.list && n.setState(p({}, e, {
                        list: e.list.filter(function(e) {
                            return e.photoUrl
                        })
                    }))
                })
            }
            ,
            n.checkSelected = function() {
                return !!n.state.selected.length || (y.default.error("请选择商品"),
                !1)
            }
            ,
            n.onCatChange = function(e) {
                if (n.checkSelected()) {
                    var t = n.state.selected;
                    D.batchUpdateCategory({
                        categoryId: e.id,
                        skuIds: JSON.stringify(t)
                    }).then(function() {
                        y.default.success("修改成功"),
                        n.clearSelected(),
                        n.loadList()
                    }).catch(function(e) {
                        return y.default.error(e.msg || "修改失败")
                    })
                }
            }
            ,
            n.removeGoodsSuccess = function() {
                y.default.success("删除成功"),
                n.clearSelected(),
                n.loadList()
            }
            ,
            n.onGoodsRemove = function() {
                if (n.checkSelected()) {
                    var e = n.state.selected;
                    (0,
                    z.removeGoods)({
                        skuIds: JSON.stringify(e),
                        success: n.removeGoodsSuccess
                    })
                }
            }
            ,
            n.getBatchComponents = function() {
                return [m.default.createElement(C.default, {
                    position: "bottom",
                    initLabelValue: "修改分类",
                    list: n.state.catList,
                    onChange: n.onCatChange,
                    syncValueToLabel: !1,
                    style: {
                        width: "94px"
                    }
                }), m.default.createElement(b.Button, {
                    name: "删除",
                    style: {
                        width: "66px"
                    },
                    onClick: n.onGoodsRemove
                })]
            }
            ;
            var r = w.default.getQuery();
            return Object.assign(n.filters, (0,
            s.default)(r, Object.keys(n.filters))),
            n.state = p({
                id2cat: {},
                catList: [],
                selected: []
            }, j.DEFAULT_TABLE_CONFIG, {
                current: r.current || 1
            }),
            n
        }
        return i(t, e),
        h(t, [{
            key: "componentDidMount",
            value: function() {
                this.loadList(),
                this.loadCatList()
            }
        }, {
            key: "loadCatList",
            value: function() {
                var e = this;
                D.getAllCat().then(function(t) {
                    var n = {};
                    t.forEach(function(e) {
                        return n[e.id] = e.name
                    }),
                    e.setState({
                        catList: t,
                        id2cat: n
                    })
                })
            }
        }, {
            key: "clearSelected",
            value: function() {
                this.setState({
                    selected: []
                })
            }
        }, {
            key: "checkIsEmpty",
            value: function() {
                var e = this.state
                  , t = e.loading;
                return 0 === e.list.length && !t && (0,
                c.default)(this.filters, H)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.state;
                return m.default.createElement("div", {
                    className: B.default.list
                }, m.default.createElement(x.Header, null, m.default.createElement(N.default, null), m.default.createElement(A.default, {
                    catList: e.catList,
                    filters: H,
                    onChange: this.onFilterChange
                })), m.default.createElement(x.Content, null, this.checkIsEmpty() ? m.default.createElement(M.default, null) : m.default.createElement(L.default, {
                    rowKey: "skuId",
                    datasets: e.list,
                    onChange: this.loadList,
                    loading: e.loading,
                    emptyLabel: e.emptyLabel,
                    sortBy: e.sortBy,
                    sortType: e.sortType,
                    id2cat: e.id2cat,
                    pageInfo: {
                        pageSize: e.pageSize,
                        current: e.current,
                        totalItem: e.totalItem
                    },
                    selection: {
                        selectedRowKeys: e.selected,
                        onSelect: this.onTableSelected
                    },
                    batchComponents: [m.default.createElement(E.default, {
                        key: "batch",
                        keys: e.list.map(function(e) {
                            return e.skuId
                        }),
                        hasSelectedAll: e.selected.length === e.list.length,
                        onSelect: this.onTableSelected,
                        items: this.getBatchComponents()
                    })]
                })))
            }
        }]),
        t
    }(v.Component);
    t.default = W,
    e.exports = t.default
}