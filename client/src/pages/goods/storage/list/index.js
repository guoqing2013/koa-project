import React, { Component } from 'react';
import { Notify, Input, Select } from 'zent';
import assign from 'lodash/assign';
import * as Actions from 'api/goods/storage';

import { Header, Content } from 'components/common';
import FilterWrap from '../components/filter-wrap';
import StorageList from '../components/storage-list';
import AddnewTip from '../components/addnew-tip'
import query from 'common/query';


import './style.css';

const defaultFilters = {
  skuNoOrName: {
    selected: "skuName",
    value: ""
  },
  categoryIds: null,
  sellingChannel: "",
  defaultVendorId: ""
}

let listRequestData = {
  state: {},
  filters: {}
}

export default class App extends Component {
  constructor() {
    super();
    this.filters = assign({}, defaultFilters);
  }
  state = {
    current: 1,
    pageSize: 20,
    list: [{"totalCostPrice":0,"kdtId":40497547,"sellChannel":1,"lastCostPrice":0,"avgCostPrice":0,"overSoldNum":0,"specifications":"334","createdAt":1520915504000,"photoUrl":"[{\"url\":\"https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg\"}]","unit":"件","stockLowWarning":true,"sellStockCount":0,"relateCode":"","stockNum":0,"name":"444444444name","skuNo":"12345","skuId":5907196,"categoryId":305936,"stockHighWarning":false,"updatedAt":1524234727000,"status":0},{"totalCostPrice":0,"kdtId":40497547,"sellChannel":6,"lastCostPrice":0,"avgCostPrice":0,"overSoldNum":0,"specifications":"","createdAt":1520734552000,"photoUrl":"[{\"url\":\"https://img.yzcdn.cn/upload_files/2015/05/14/FoMCEwRpIbleJqCh7A---MZ-JvUc.png\"}]","unit":"件","stockLowWarning":false,"sellStockCount":100000,"relateCode":"","stockNum":100000,"name":"实物商品（购买时需填写收货地址，测试商品，不发货，不退款）","skuNo":"P000000000000001","skuId":5903147,"categoryId":305936,"stockHighWarning":false,"updatedAt":1520764795000,"status":0}],
    sortBy: null,
    sortType: null,
    totalItem: 0,
    emptyLabel: null,
    catList: [{name: 'a'}],
    id2cat: { },
    loading: false,
    selected: [],
  };


  componentDidMount() {
    // this.fetchList();
  }



  // fetchList = options => {
  //   // const param = Helper.serializeAjaxData(options, this.state);
  //   const param = options;

  //   console.log('param',param);
  //   this.setState({
  //     loading: true
  //   });
  //   Actions.list(param)
  //     .then(({ response }) => {
  //       this.setState({
  //         list: response.items,
  //         page_info: response.paginator,
  //         loading: false
  //       });
  //     })
  //     .catch(msg => {
  //       debugger;
  //       // Notify.error(msg);
  //       // this.setState({
  //       //   loading: false
  //       // });
  //     });
  // };











  // 最大组件的属性
  /**
   * 筛选
   */
  onFilterChange = (filtersData) => {
    this.filters = filtersData;
    listRequestData.filters = filtersData;
    this.loadList({
        current: 1
    });
    debugger;
  }

  /**
   * 
   */
  onTableSelected = function(e) {
    this.setState({
        selected: e
    })
  }

  /**
   * 获取列表
   */
  loadList = () =>{
    // var e, 
    //  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    // //  r = this.state,
    //  state = this.state,
    //  i = this.filters,
    //  u = {
    //     current: t.current || state.current,
    //     sortBy: t.sortBy || state.sortBy,
    //     sortType: t.sortType || state.sortType
    // }, 
    // s = i.skuNoOrName,
    // l = a(i, ["skuNoOrName"]),
    // c = g({}, u, l, (e = {
    //     pageNo: u.current,
    //     attributes: [1, 3]
    // },
    // o(e, s.selected, s.value),
    // o(e, "sortType", "asc" === u.sortType ? 1 : 2),
    // o(e, "sortName", u.sortBy),
    // e));
    // !(0,
    // m.default)(l.categoryIds) && (c.categoryIds = [c.categoryIds]),
    this.setState({
        loading: true,
        emptyLabel: "数据正在加载中"
    });
    // query.setQuery(assign({}, query.getQuery(), {
    //     current: u.current,
    //     skuNoOrName: JSON.stringify(s)
    // })),
    // M.handleList.call(n, I.loadList, c, u).then(function(e) {
    //     e && e.list && n.setState(g({}, e, {
    //         list: e.list.filter(function(e) {
    //             return e.photoUrl
    //         })
    //     }))
    // })
  }

  // checkSelected = function() {
  //   return !!this.state.selected.length || (x.default.error("请选择商品"),
  //   !1)
  // }
// ,
// onCatChange = function(e) {
//     if (n.checkSelected()) {
//         var t = n.state.selected;
//         I.batchUpdateCategory({
//             categoryId: e.id,
//             skuIds: JSON.stringify(t)
//         }).then(function() {
//             x.default.success("修改成功"),
//             n.clearSelected(),
//             n.loadList()
//         }).catch(function(e) {
//             return x.default.error(e.msg || "修改失败")
//         })
//     }
// }

// removeGoodsSuccess = function() {
//     x.default.success("删除成功"),
//     this.clearSelected(),
//     this.loadList()
// }

// onGoodsRemove = function() {
//     if (n.checkSelected()) {
//         var e = n.state.selected;
//         (0,
//         W.removeGoods)({
//             skuIds: JSON.stringify(e),
//             success: n.removeGoodsSuccess
//         })
//     }
// }

  checkIsEmpty = () => {
    // var state = this.state
    // , loading = state.loading;
    // return 0 === state.list.length && !loading && (0,
    // h.default)(this.filters, V)
    return false;
  }

  render() {

    const state = this.state;
    return (
      <div>
        <Header>
          <FilterWrap
           catList={state.catList}
           defaultFilters={defaultFilters}
           filters={this.filters}
           onChange={this.onFilterChange}
          />
        </Header>
        <Content>
          {
            this.checkIsEmpty() 
            ?
            <AddnewTip />
            :
            <StorageList
             rowKey="skuId"
             datasets={state.list}
             onChange={this.loadList}
             loading={state.loading}
             emptyLabel={state.emptyLabel}
             sortBy={state.sortBy}
             sortType={state.sortType}
             id2cat={state.id2cat}
             pageInfo={
               {
                 pageSize: state.pageSize,
                 current: state.current,
                 totalItem: state.totalItem
               }
             }
             selection={
               {
                selectedRowKeys: state.selected,
                onSelect: this.onTableSelected
               }
             }
            /> 
            //  batchComponents
          }
          
        </Content>
{/*           <StorageList
            list={list}
            pageInfo={pageInfo}
            loading={loading}
            onChange={this.handlePageChange}
          /> */}
      </div>
    );
  }
}
