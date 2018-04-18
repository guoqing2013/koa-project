
import React, { Component } from 'react';
import { Input, Select, Button, DatePicker, DateRangeQuickPicker } from 'zent';
// import Field from './Field';
import Filters from 'components/Filters';
import Field from 'components/Field';
import TabsFilter from './TabsFilter';
import * as Helper from '../../helper';
import {
  orderLabelMap,
  typeMap,
  stateMap,
  buyWayMap,
  expressTypeMap
} from '../../constants';


export default class Filter extends Component {
  state = {
    order_label: 'order_no',
    order_label_value: '',
    start_time: '',
    end_time: '',
    choose_days: 0,
    type: 'all',
    state: 'all',
    express_type: 'all',
    feedback: 'all',
    buy_way: 'all',
    period_send_time: ''
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
      order_label: orderLabel,
      order_label_value: orderLabelValue,
      type,
      feedback,
      state,
      express_type: expressType,
      buy_way: buyWay,
      start_time: startTime,
      end_time: endTime,
      choose_days: chooseDays,
      period_send_time: periodSendTime
    } = this.state;

    const dateValue = [startTime, endTime];

    return (
      <div className="trade-order-list__filter-div">








        <div className="trade-order-list__filter">
          


          <div
            className="trade-order-list__filter-row"
            style={{ marginLeft: '110px' }}
          >
           <Field
              label="商品名称或条码："
              className="feedback-change-line-style"
              content={
                <Input
                  name="feedback"
                  value={feedback}
                  data={Helper.transformSelectData(stateMap.feedback)}
                  onChange={this.handleChange}
                />
              }
            />
            <Field
              label="商品分类"
              content={
                <Select
                  name="state"
                  value={state}
                  data={Helper.transformSelectData(stateMap[type])}
                  onChange={this.handleChange}
                />
              }
            />
             <Field
              label="销售渠道："
              className="feedback-change-line-style"
              content={
                <Select
                  name="feedback"
                  value={feedback}
                  data={Helper.transformSelectData(stateMap.feedback)}
                  onChange={this.handleChange}
                />
              }
            />
           
          </div>


          <div
            className="trade-order-list__filter-row"
            style={{ marginLeft: '170px' }}
          >
            <Button
              className="trade-refundsManage__filter-btn"
              type="primary"
              onClick={this.onSearch}
            >
              筛选
            </Button>
            <Button onClick={this.onExport}>批量导出</Button>
            <Button
              href="https://youzan.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看已导出报表
            </Button>
          </div>
        </div>
        <TabsFilter
          activeId={state}
          tabs={Helper.transformSelectData(stateMap[type])}
          onChange={this.handleTabChange}
        />
      </div>
    );
  }
}
