
import React, { Component } from 'react';
import { Input, Select } from 'zent';
import assign from 'lodash/assign';
import FilterList from 'components/FilterList';
import FilterAction from 'components/FilterAction';
import SelectWithInput from 'components/select-with-input';
// import TabsFilter from './TabsFilter';
import * as Helper from '../../helper';
import {
  orderLabelMap,
  typeMap,
  stateMap,
  buyWayMap,
  expressTypeMap
} from '../../constants';

import './index.css';


const options = [{
  text: "商品名称",
  value: "skuName"
}, {
  text: "商品条码",
  value: "skuNo"
}]


export default class Filter extends Component {
  state = {
    // sku_no: '',
    // sku_name: '',
    // selling_channel: '',
    // category_ids: ''

    skuNoOrName: {
      selected: "skuName",
      value: ""
    },
    categoryIds: null,
    sellingChannel: "",
    defaultVendorId: ""
  };

  // handleInputChange = e => {
  //   const value = e.target.value.trim();
  //   this.setState({
  //     [e.target.name]: value
  //   });
  // };

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
    // d.default.setQuery(u({}, this.state, {
    //     skuNoOrName: JSON.stringify(this.state.skuNoOrName)
    // })),
    this.props.onChange(this.state)
  };

  onClearFilters = () => {
  //     d.default.clearQuery(),
  //     this.setState(r.props.defaultFilters, r.onFilter)
  }


  // 筛选列表
  onSearch = () => {
    const { handleFilterChange } = this.props;
    handleFilterChange(this.state);
  };

  onExport = () => {};

  selectInputChange = () => {
    // this.setState({
    //   sku_no:
    //   sku_name: 
    // })
  };
  

  render() {
    const state = this.state;
    // var filters = this.getFilterItems();

    return (
      <div className="filters">
        <FilterList
         filters={
          [
            {
              label: "商品筛选：",
              component: 
                <SelectWithInput />,
                  // value={state.skuNoOrName}
                  // selected="skuNo"
                  // options={options}
                  // onChange={this.handleSkuChange}
                props: assign({}, state.skuNoOrName, {
                  onChange: this.handleSkuChange
                })
            },
            {
              label: "商品分类：",
              component:  <Select
                />,
                  // name="categoryIds"
                  // value={state.categoryIds}
                  // data={state.categoryIds}
                  // onChange={this.handleCatChange}
              props: {
                value: state.categoryIds,
                onChange: this.handleCatChange,
                // list: this.props.catList 
                list: []
              }
            },
            {
              label: "销售渠道：",
              component:  <Select />,
                  // name="sellingChannel"
                  // value={state.sellingChannel}
                  // data={state.sellingChannel}
                  // onChange={this.handleChannelChange}
              props: {
                value: state.sellingChannel,
                onChange: this.handleChannelChange,
              }
            },
            {
              label: "首选供应商：",
              component:  <Select
                />,
                  // name="defaultVendorId"
                  // value={state.defaultVendorId}
                  // data={state.defaultVendorId}
                  // onChange={this.handleSupplierChange}
              props: {
                value: state.defaultVendorId,
                onChange: this.handleSupplierChange,
              }
            },
          ]
        }
      />

        <FilterAction
          onConfirm={this.onFilter}
          onClear={this.onClearFilters}
        />
          {/* filters={filters} */}
      </div>
    );
  }
}
