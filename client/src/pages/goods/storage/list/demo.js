function n4654(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function a(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function u(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function s(e, t) {
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
    var l = n(111)
      , c = r(l)
      , f = n(88)
      , d = r(f)
      , p = n(657)
      , h = r(p)
      , v = n(23)
      , m = r(v)
      , g = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , y = function() {
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
      , b = n(1)
      , _ = r(b)
      , w = n(5)
      , x = r(w)
      , O = n(83)
      , S = n(1289)
      , E = r(S)
      , C = n(45)
      , k = n(2517)
      , P = r(k)
      , D = n(648)
      , T = r(D)
      , M = n(108)
      , j = n(3322)
      , I = function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }(j)
      , N = n(2258)
      , R = n(4649)
      , A = r(R)
      , F = n(4652)
      , L = r(F)
      , z = n(4650)
      , U = r(z)
      , B = n(4651)
      , H = r(B)
      , W = n(4653)
      , G = n(4290)
      , q = r(G)
      , V = {
        skuNoOrName: {
            selected: "skuName",
            value: ""
        },
        categoryIds: null,
        sellingChannel: "",
        defaultVendorId: ""
    }
      , Y = {
        state: {},
        filters: {}
    }
      , X = function(e) {
        function t(e) {
            i(this, t);
            var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            n.filters = g({}, V),
            n.onFilterChange = function(e) {
                n.filters = e,
                Y.filters = e,
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
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.state, i = n.filters, u = {
                    current: t.current || r.current,
                    sortBy: t.sortBy || r.sortBy,
                    sortType: t.sortType || r.sortType
                }, s = i.skuNoOrName, l = a(i, ["skuNoOrName"]), c = g({}, u, l, (e = {
                    pageNo: u.current,
                    attributes: [1, 3]
                },
                o(e, s.selected, s.value),
                o(e, "sortType", "asc" === u.sortType ? 1 : 2),
                o(e, "sortName", u.sortBy),
                e));
                !(0,
                m.default)(l.categoryIds) && (c.categoryIds = [c.categoryIds]),
                n.setState({
                    loading: !0,
                    emptyLabel: "数据正在加载中"
                }),
                E.default.setQuery(g({}, E.default.getQuery(), {
                    current: u.current,
                    skuNoOrName: JSON.stringify(s)
                })),
                M.handleList.call(n, I.loadList, c, u).then(function(e) {
                    e && e.list && n.setState(g({}, e, {
                        list: e.list.filter(function(e) {
                            return e.photoUrl
                        })
                    }))
                })
            }
            ,
            n.checkSelected = function() {
                return !!n.state.selected.length || (x.default.error("请选择商品"),
                !1)
            }
            ,
            n.onCatChange = function(e) {
                if (n.checkSelected()) {
                    var t = n.state.selected;
                    I.batchUpdateCategory({
                        categoryId: e.id,
                        skuIds: JSON.stringify(t)
                    }).then(function() {
                        x.default.success("修改成功"),
                        n.clearSelected(),
                        n.loadList()
                    }).catch(function(e) {
                        return x.default.error(e.msg || "修改失败")
                    })
                }
            }
            ,
            n.removeGoodsSuccess = function() {
                x.default.success("删除成功"),
                n.clearSelected(),
                n.loadList()
            }
            ,
            n.onGoodsRemove = function() {
                if (n.checkSelected()) {
                    var e = n.state.selected;
                    (0,
                    W.removeGoods)({
                        skuIds: JSON.stringify(e),
                        success: n.removeGoodsSuccess
                    })
                }
            }
            ,
            n.getBatchComponents = function() {
                return [_.default.createElement(T.default, {
                    position: "bottom",
                    initLabelValue: "修改分类",
                    list: n.state.catList,
                    onChange: n.onCatChange,
                    syncValueToLabel: !1,
                    style: {
                        width: "94px"
                    }
                }), _.default.createElement(O.Button, {
                    name: "删除",
                    style: {
                        width: "66px"
                    },
                    onClick: n.onGoodsRemove
                })]
            }
            ;
            var r = E.default.getQuery();
            return Object.assign(n.filters, (0,
            d.default)(r, Object.keys(V))),
            n.state = g({
                id2cat: {},
                catList: [],
                selected: []
            }, N.DEFAULT_TABLE_CONFIG, {
                current: r.current || 1
            }),
            n
        }
        return s(t, e),
        y(t, [{
            key: "componentDidMount",
            value: function() {
                (0,
                c.default)(Y.filters) || (this.filters = Y.filters),
                this.loadList(),
                this.loadCatList()
            }
        }, {
            key: "loadCatList",
            value: function() {
                var e = this;
                I.getAllCat().then(function(t) {
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
                h.default)(this.filters, V)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.state;
                return _.default.createElement("div", {
                    className: q.default.list
                }, _.default.createElement(C.Header, null, _.default.createElement(L.default, null), _.default.createElement(U.default, {
                    defaultFilters: V,
                    catList: e.catList,
                    filters: this.filters,
                    onChange: this.onFilterChange
                })), _.default.createElement(C.Content, null, this.checkIsEmpty() ? _.default.createElement(A.default, null) : _.default.createElement(H.default, {
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
                    batchComponents: [_.default.createElement(P.default, {
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
    }(b.Component);
    t.default = X,
    e.exports = t.default
}