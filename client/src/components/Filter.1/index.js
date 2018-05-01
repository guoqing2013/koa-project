
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Notify, Input, Select } from 'zent';
import SelectWithInput from 'components/select-with-input';
import omit from 'lodash/omit';
import assign from 'lodash/assign';

import FilterList from '../FilterList';
import FilterAction from '../FilterAction';
import query from 'common/query';

import './index.css';

export default class Filter extends PureComponent {

  state = assign({}, this.props.filters);

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
    const { filters, className, onClear, onConfirm } = this.props;
    let filterActionProps = omit(this.props,["filters", "className"]); 
    //  FilterAction的属性太多，多少一用omit操作
    return (
      <div className="filters">
        <FilterList
          className={className}
          filters={filters}
        />
        {
          onClear && onConfirm &&
          <FilterAction
            {...filterActionProps}
          />
            // onConfirm={onConfirm}
            // onClear={onClear}
        }
      </div>
    );
  }
}

// Filter.propTypes = {
//   filters: PropTypes.array.isRequired,
//   disabled: PropTypes.bool,
//   loading: PropTypes.bool,
//   onClear: PropTypes.func,
//   onConfirm: PropTypes.func
// }