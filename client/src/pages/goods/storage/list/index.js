import React, { Component } from 'react';
import { Notify } from 'zent';
import * as Actions from 'api/goods/storage';

import Filters from '../components/filter';
import StorageList from '../components/storage-list';
import * as Helper from '../helper';

import './style.css';

export default class App extends Component {
  state = {
    filter_info: {
      start_time: '',
      end_time: '',
      type: 'all',
      state: 'all',
      orderby: 'book_time',
      order_es_tag: '',
      tuanId: '',
      order: 'desc',
      disable_express_type: '',
      order_label: 'order_no',
      feedback: 'all',
      buy_way: 'all',
      express_type: 'all',
      choose_days: 0,
      period_send_time: '',
      delivery_start_time: '',
      delivery_end_time: '',

      attributes: '',
      category_ids: '',
      child_category: '',
      is_low_warning: '',
      name_or_sku_no: '',
      page_no: 1,
      page_size: 20,
      selling_channel: '',
      sort_name: '',
      sort_type: '',
      source: '',
    },
    page_info: {
      page: 1,
      count: 20,
      total: 0
    },
    list: [],
    loading: false
  };

  componentDidMount() {
    // const { location } = this.props;

    this.fetchList();
  }

  fetchList = options => {
    const param = Helper.serializeAjaxData(options, this.state);
    console.log('param',param);
    this.setState({
      loading: true
    });
    Actions.list(param)
      .then(({ response }) => {
        this.setState({
          list: response.items,
          page_info: response.paginator,
          loading: false
        });
      })
      .catch(msg => {
        debugger;
        // Notify.error(msg);
        // this.setState({
        //   loading: false
        // });
      });
  };

  handlePageChange = current => {
    if (current) {
      this.fetchList({ page: current });
    }
  };

  render() {
    const {
      filter_info: filterInfo,
      list,
      page_info: pageInfo,
      loading
    } = this.state;
    return (
      <div className="page">
      
        <div className="container">
          <Filters {...filterInfo} handleFilterChange={this.fetchList} />
          <StorageList
            list={list}
            pageInfo={pageInfo}
            loading={loading}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
