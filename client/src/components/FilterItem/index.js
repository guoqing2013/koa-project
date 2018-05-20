import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';
export default class FilterItem extends PureComponent {
  render() {
    const { 
      label, width, component, siblings, children, className, wordCount, wordWidth, required, props
    } = this.props;
    let filterItemStyle = {};
    if (wordCount) {
      filterItemStyle = {
        width: wordWidth * wordCount
      }
    } else if (width) {
      filterItemStyle = {
        width: width
      }
    }

    if (!label && !component && !children) {
      return <div className="filter-item__seprator"></div>
    }

    const MapComponent = component;
    console.log('this.props', this.props)
    return (
      <div className="filter-item" style={filterItemStyle}>
        <label className={cx('filter-item__label', {'filter-item__label--required': required})} >{label}</label>
        <div className="filter-item__control">
          {MapComponent && <MapComponent {...props} />}
        </div>
        {siblings && <div className="filter-item__siblings">{siblings}</div>}
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
