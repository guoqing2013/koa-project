import React, { PureComponent } from 'react';

import './index.css';
export default class Field extends PureComponent {
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
