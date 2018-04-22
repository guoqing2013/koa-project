import React, { PureComponent } from 'react';
import  './index.css';

export default class Meta extends PureComponent {
  render() {
    const { photoUrl, name, skuNo } = this.props;
    return (
      <div className="d-flex meta cell__child-container">
        <div className="retail-lazyimage-container cover">
          <img src={photoUrl} alt="商品图片" />
        </div>
        <div className="info">
          <p className="limit">{name}</p>
          <p className="cat">{skuNo}</p>
          <p className="meta-list"></p>
        </div>
      </div>
    );
  }
}
