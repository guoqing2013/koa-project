import { Notify } from 'zent';
import assign from 'lodash/assign';
export function handleList  (request, params, otherParam)  {
    const _this = this;
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
        // }, otherParam)
        return assign({
            list: items,
            totalItem: totalCount || 0,
            emptyLabel: totalCount > 0 ? null : "未查找到任何数据"
        }, otherParam);
    }).catch(function(error) {
        _this.setState({
            list: [],
            totalItem: 0,
            current: 1,
            emptyLabel: "数据加载出错"
        });
        Notify.error(error.msg || "数据加载出错");
        return error;
        // return r.setState({
        //     list: [],
        //     totalItem: 0,
        //     current: 1,
        //     emptyLabel: "数据加载出错"
        // }),
        // A.default.error(t.msg || "数据加载出错"),
        // error
    }).finally(function() {
        _this.setState({
            loading: false
        });
    })
}

export default {
    handleList
}