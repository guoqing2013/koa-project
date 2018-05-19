
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Select } from 'zent';
import SelectWithInput from 'components/select-with-input';
// import omit from 'lodash/omit';
import assign from 'lodash/assign';

import Filter from 'components/Filter';
// import FilterAction from '../FilterAction';
import URIUtil from 'common/URIUtil';

import './index.css';

export default class FilterWrap extends PureComponent {

  state = assign({}, this.props.filters);



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

  onFilter = () => {
    URIUtil.setQuery(assign({}, this.state, {
        skuNoOrName: JSON.stringify(this.state.skuNoOrName)
    }));
    this.props.onChange(this.state)
  };

  onClearFilters = () => {
      URIUtil.clearQuery();
      this.setState(this.props.defaultFilters, this.onFilter)
  }

  getFilterItems() {
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

  render() {
    const filters = this.getFilterItems();
    return (
      <div className="filters">
        <Filter
          filters={filters}
          onClear={this.onClearFilters}
          onConfirm={this.onFilter}
        />
      </div>
    );
  }
}

