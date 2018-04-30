import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.css';
export default class FilterItem extends PureComponent {
  render() {
    const { label, component, wordWidth } = this.props;
    return (
      <div className="filter-item">
        <label className="filter-item__label">{label}</label>
        <div className="filter-item__control">{component}</div>
      </div>
    );
  }
}

FilterItem.defaultProps = {
  wordWidth: 12
}

FilterItem.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  siblings: PropTypes.node,
  wordCount: PropTypes.number,
  width: PropTypes.number
}
