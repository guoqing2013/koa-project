import React, { PureComponent } from 'react';
import cx from 'classnames';
import Field from '../Field';

import './index.css';
export default class FilterList extends PureComponent {
  render() {
    const { filters, className,  } = this.props;
    return (
        <div className={cx('filter-list', className)}>
          {
            filters.map((item, index) => {
              console.log(item);
              return <Field key={index} {...item} />
            })
          }
        </div>
    );
  }
}
