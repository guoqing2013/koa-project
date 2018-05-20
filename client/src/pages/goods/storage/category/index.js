import React, { Component } from 'react';
import { Notify, Input, Select, Button } from 'zent';
import assign from 'lodash/assign';
import set from 'lodash/set';
import omit from 'lodash/omit';

import { Header, Content } from 'components/common';
import Batch from 'components/Batch'
import FilterWrap from '../components/filter-wrap';
import StorageList from '../components/storage-list';
import AddnewTip from '../components/addnew-tip'
import URIUtil from 'common/URIUtil';
import ajaxUtils from 'common/ajaxUtils';
import * as Actions from 'api/goods/storage';
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
    list: [],
    sortBy: null,
    sortType: null,
    totalItem: 0,
    emptyLabel: null,
    catList: [{name: 'a'}],
    id2cat: { },
    loading: false,
    selected: [],
  };

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


  /**
   * 筛选
   */
  onFilterChange = (filter) => {
    this.filters = filter;
    listRequestData.filters = filter;
    this.loadList({
        current: 1
    });
  }

  /**
   * 
   */
  onTableSelected = (selected) =>{
    this.setState({
        selected
    })
  }

  /**
   * 获取商品列表
   */
  loadList = (options) =>{
    var e;
    //  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    options = options ? options : {};
    // //  r = this.state,
     const state = this.state;
    //  i = this.filters,
     const filters = this.filters;


     const otherParam = {
        current: options.current || state.current,
        sortBy: options.sortBy || state.sortBy,
        sortType: options.sortType || state.sortType
    }; 

    // s = filters.skuNoOrName,
    const skuNoOrName = filters.skuNoOrName;
    const newFilters = omit(filters, ["skuNoOrName"]);

    // c = g({}, u, l, (e = {
    //     pageNo: u.current,
    //     attributes: [1, 3]
    // },
    const param = assign({}, otherParam, newFilters, e = {
      pageNo: otherParam.current,
      attributes: [1, 3]
    })


    set(e, skuNoOrName.selected, skuNoOrName.value);
    set(e, "sortType", "asc" === otherParam.sortType ? 1 : 2);
    set(e, "sortName", otherParam.sortBy);
    // e));
    // !(0,  m.default)(l.categoryIds) && (c.categoryIds = [c.categoryIds]),
    this.setState({
        loading: true,
        emptyLabel: "数据正在加载中"
    });

    // 在url中设置请求参数
    URIUtil.setQuery(assign({}, URIUtil.getQuery(), {
        current: otherParam.current,
        skuNoOrName: JSON.stringify(skuNoOrName)
    }));


   


    ajaxUtils.handleList.call(this, Actions.loadList, param, otherParam).then((data) => {
      // response = {"list":[ {"totalCostPrice":0,"kdtId":40497547,"sellChannel":1,"lastCostPrice":0,"avgCostPrice":0,"overSoldNum":0,"specifications":"334","createdAt":1520915504000,"photoUrl":"[{\"url\":\"https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg\"}]","unit":"件","stockLowWarning":true,"sellStockCount":0,"relateCode":"","stockNum":0,"skuNo":"12345","name":"444444444name","skuId":5907196,"categoryId":305936,"stockHighWarning":false,"updatedAt":1524234727000,"status":0},{"totalCostPrice":0,"kdtId":40497547,"sellChannel":6,"lastCostPrice":0,"avgCostPrice":0,"overSoldNum":0,"specifications":"","createdAt":1520734552000,"photoUrl":"[{\"url\":\"https://img.yzcdn.cn/upload_files/2015/05/14/FoMCEwRpIbleJqCh7A---MZ-JvUc.png\"}]","unit":"件","stockLowWarning":false,"sellStockCount":100,"relateCode":"","stockNum":100,"skuNo":"P000000000000001","name":"实物商品（购买时需填写收货地址，测试商品，不发货，不退款）","skuId":5903147,"categoryId":305936,"stockHighWarning":false,"updatedAt":1520764795000,"status":0}],"totalItem":2,"emptyLabel":null,"current":1,"sortBy":null,"sortType":null};
      if (data && data.list) {
        this.setState({
          ...data,
          // list: data.list.filter((item) => {
          //   return item.photoUrl;
          // })
        })
      }
    })


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

  onGoodsRemove = function() {
      // if (this.checkSelected()) {
      //     var e = this.state.selected;
      //     (0,
      //     W.removeGoods)({
      //         skuIds: JSON.stringify(e),
      //         success: this.removeGoodsSuccess
      //     })
      // }
  }

  getBatchComponents = () => {
    // return [_.default.createElement(T.default, {
    //     position: "bottom",
    //     initLabelValue: "修改分类",
    //     list: n.state.catList,
    //     onChange: n.onCatChange,
    //     syncValueToLabel: !1,
    //     style: {
    //         width: "94px"
    //     }
    // }), _.default.createElement(O.Button, {
    //     name: "删除",
    //     style: {
    //         width: "66px"
    //     },
    //     onClick: n.onGoodsRemove
    // })]
    return (
      [
        <Button position="bottom" initLabelValue="修改分类" syncValueToLabel={false} list={this.state.catList} style={{width: '94px'}} onChange={this.onCatChange}>修改分类</Button>,
        <Button type="primary" outline style={{width: '66px'}} onClick={this.onGoodsRemove}>删除</Button>
      ]
    )
  }

  componentDidMount() {
    this.loadList();
    this.loadCatList();
  }

  /**
   * 获取商品分类列表
   */
  loadCatList() {
    // var e = this;
    // I.getAllCat().then(function(t) {
    //     var n = {};
    //     t.forEach(function(e) {
    //         return n[e.id] = e.name
    //     }),
    //     e.setState({
    //         catList: t,
    //         id2cat: n
    //     })
    // })
  }

  checkIsEmpty() {
    // var state = this.state
    // , loading = state.loading;
    // return 0 === state.list.length && !loading && (0,
    // h.default)(this.filters, V)
    return false;
  }

  render() {

    const state = this.state;
    console.log('state.list', state.list)
    return (
      <div>
        <Header>
          
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
             batchComponents={
               [
                <Batch
                  key="batch"
                  keys={state.list.map(function(e) {
                    return e.skuId
                  })}
                  hasSelectedAll={state.selected.length === state.list.length}
                  onSelect={this.onTableSelected}
                  items={this.getBatchComponents()}
                />
               ]
             }
            /> 
          }
          
        </Content>
      </div>
    );
  }
}
