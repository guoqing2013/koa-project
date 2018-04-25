
import React, { Component } from 'react';
import { Input, Select } from 'zent';
import FilterList from 'components/FilterList';
import FilterAction from 'components/FilterAction';
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

export default class Filter extends Component {
  state = {
    name_or_sku_no: '',
    selling_channel: '',
    category_ids: ''
  };

  handleChangeDate = (value, chooseDays) => {
    this.setState({
      start_time: value[0],
      end_time: value[1],
      choose_days: chooseDays
    });
  };

  hanleChangePeriodDate = periodTime => {
    this.setState({
      period_send_time: periodTime
    });
  };

  handleChange = e => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  };

  // 筛选列表
  onSearch = () => {
    const { handleFilterChange } = this.props;
    handleFilterChange(this.state);
  };

  onExport = () => {};

  handleTabChange = tabId => {
    const { handleFilterChange } = this.props;
    this.setState({
      state: tabId
    });
    handleFilterChange(this.state);
  };

  render() {
    const {
      name_or_sku_no,
      selling_channel,
      category_ids
    } = this.state;


    return (
      <div className="filters">
        <FilterList
         filters={
          [
            {
              label: "商品名称或条码：",
              component:  <Input
                  name="name_or_sku_no"
                  value={name_or_sku_no}
                  data={stateMap.name_or_sku_no}
                  onChange={this.handleChange}
                />
            },
            {
              label: "商品分类：",
              component:  <Select
                  name="state"
                  value={category_ids}
                  data={category_ids}
                  onChange={this.handleChange}
                />
            },
             {
              label: "销售渠道：",
              component:  <Select
                  name="selling_channel"
                  value={selling_channel}
                  data={selling_channel}
                  onChange={this.handleChange}
                />
            },
          ]
        }
      />

        <FilterAction
          onConfirm={this.onSearch}
          onClear={this.onClear}
        />


      </div>
    );
  }
}
