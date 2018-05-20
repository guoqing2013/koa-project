
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { Notify, Input, Select } from 'zent';
import omit from 'lodash/omit';
// import assign from 'lodash/assign';

import FilterList from '../FilterList';
import FilterAction from '../FilterAction';

import './index.css';

export default class Filter extends PureComponent {
  render() {
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

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClear: PropTypes.func,
  onConfirm: PropTypes.func
}