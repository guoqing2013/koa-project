import React, { Component } from 'react';
import { Notify, Input, Select } from 'zent';
import assign from 'lodash/assign';
import * as Actions from 'api/goods/storage';
import SelectWithInput from 'components/select-with-input';
import Filter from 'components/Filter';
// import StorageList from '../components/storage-list';
import query from 'common/query';

import './style.css';



export default class App extends Component {
  state = {
    // filter_info: {
      // attributes: '',
      // category_ids: '',
      // child_category: '',
      // is_low_warning: '',
      // name_or_sku_no: '',
      // selling_channel: '',
      // sort_name: '',
      // sort_type: '',
      // source: '',
    // },
    // page_info: {
    //   page_no: 1,
    //   page_size: 20,
    //   total: 0
    // },
    // list: [],
    // loading: false,


    skuNoOrName: {
      selected: "skuName",
      value: ""
    },
    categoryIds: null,
    sellingChannel: "",
    defaultVendorId: ""
  };

  componentDidMount() {
    // this.fetchList();
  }

  getFilterItems = () => {
    var state = this.state;
    return [
      {
        label: "商品筛选：",
        component: SelectWithInput,
        props: assign({}, state.skuNoOrName, {
          onChange: this.handleSkuChange
        })
      },
      {
        label: null
      },
      {
        label: "商品分类：",
        component:  Select,
        props: {
          value: state.categoryIds,
          onChange: this.handleCatChange,
          // list: this.props.catList 
          list: []
        }
      },
      {
        label: "销售渠道：",
        component:  Select ,
        props: {
          value: state.sellingChannel,
          onChange: this.handleChannelChange,
        }
      },
      {
        label: "首选供应商：",
        component:  Select,
        props: {
          value: state.defaultVendorId,
          onChange: this.handleSupplierChange,
        }
      },
    ]
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

  handlePageChange = current => {
    if (current) {
      this.fetchList({ page: current });
    }
  };










  // 最大组件的属性
  /**
   * 筛选
   */
  onFilterChange = (e) => {
    // this.filters = e,
    // Y.filters = e,
    this.loadList({
        current: 1
    });
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













  handleCatChange = (e) => {
    this.setState({
        categoryIds: e.id
    })
  };

  handleChannelChange = (e) => {
    this.setState({
        sellingChannel: e.target.value
    })
  };

  handleSkuChange = (data) => {
    this.setState({
        skuNoOrName: data
    })
  };

  handleSupplierChange = (e) => {
    this.setState({
        defaultVendorId: e.target.value
    })
  }; 

  onFilter = function() {
    query.setQuery(assign({}, this.state, {
        skuNoOrName: JSON.stringify(this.state.skuNoOrName)
    }));
    // this.props.onChange(this.state)
    debugger;
  };

  onClearFilters = () => {
  //     d.default.clearQuery(),
  //     this.setState(r.props.defaultFilters, r.onFilter)
  }


  render() {
    const filters = this.getFilterItems();
    return (
      <div>
          <Filter
           filters={filters}
           onConfirm={this.onFilter}
           onClear={this.onClearFilters}
          />
            {/* handleFilterChange={this.fetchList} */}
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
