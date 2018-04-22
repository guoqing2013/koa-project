import React, { PureComponent } from 'react';

import './index.css';
export default class Field extends PureComponent {
  render() {
    const { label, component, wordWidth } = this.props;
    return (
      <div>
        <div className="page-block header">
        </div>
        <div className="page-block content">
        </div>
      </div>
    );
  }
}
