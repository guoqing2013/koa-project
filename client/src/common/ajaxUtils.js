
export function handleList  (request, params, n)  {
    const _this = this;
    debugger;
    //   , i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    return request(params).then(function(data) {
        var items = data.items
          , paginator = data.paginator
          , totalCount = paginator.totalCount;
        // return i && (items = (0,
        // Y.parseValByRatio)(items, {
        //     stock: -3,
        //     price: -2
        // })),
        // N({
        //     list: items,
        //     totalItem: totalCount || 0,
        //     emptyLabel: totalCount > 0 ? null : "未查找到任何数据"
        // }, n)
    }).catch(function(t) {
        // return _this.setState({
        //     list: [],
        //     totalItem: 0,
        //     current: 1,
        //     emptyLabel: "数据加载出错"
        // }),
        // A.default.error(t.msg || "数据加载出错"),
        // t
    }).finally(function() {
        _this.setState({
            loading: false
        })
    })
}

export default {
    handleList
}