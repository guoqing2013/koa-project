import React, { PureComponent } from 'react';
import omit from 'lodash/omit';
import assign from 'lodash/assign';
import cx from 'classnames';
import FilterItem from '../FilterItem';

import './index.css';
export default class FilterList extends PureComponent {
  render() {
    const { filters, className } = this.props;
    const filtersElement = filters.reduce((total, currentValue, currentIndex) => {
      let children = currentValue.children;
      let isHide = currentValue.isHide;
      let omitedValue = omit(currentValue, ["children", "isHide"]); //这个对象由忽略属性之外的object自身和继承的可枚举属性组成。
      if (!isHide) {
        // total.push(123)
        // const newOmitedValue = assign({
        //   key: currentIndex,
        // }, omitedValue)

        total.push(
          <FilterItem key={currentIndex} {...omitedValue} />
        );
      }
      return total
    }, []);
    console.log('filtersElement', filtersElement)
    return (
        <div className={cx('filter-list', className)}>
          {filtersElement}
{/*           {
            filters.map((item, index) => {
              console.log(item);
              return <FilterItem key={index} {...item} />
            })
          } */}
        </div>
    );
  }
}
