import React, { PureComponent } from 'react';
import { Button } from 'zent';
import './index.css';

export default class FilterAction extends PureComponent {
  render() {
    const { onConfirm } = this.props;
    return (
      <div className="filter-actions">
        <Button
              type="primary"
              onClick={onConfirm}
            >
              筛选
            </Button>
      </div>
    );
  }
}
