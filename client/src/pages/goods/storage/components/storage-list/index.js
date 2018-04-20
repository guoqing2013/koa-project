import React, { Component } from 'react';
import { Loading, Pagination, Affix, Table  } from 'zent';
import map from 'lodash/map';

import OrderItem from './OrderItem';

import './style.css';




const columns = [
  {
  title: '商品名称',
  bodyRender: (data) => {
    return (
      <div >{data.name}</div>
    );
  },
  width: '30'
},
 {
  title: "规格",
  bodyRender: (data) => {
    return (
      <div>{data.item_id}</div>
    );
  },
  width: '9'
}, 
{
  title: "商品分类",
  bodyRender: (data) => {
    return (
      <div>{data.specifications || '-'}</div>
    );
  }
}, 
{
  title: "销售渠道",
  bodyRender: (data) => {
    return (
      <div>{data.item_id}</div>
    );
  },
}, 
{
  title: "单位",
  name: "unit",
/*   width: '100px',
  textAlign: 'center',
  isMoney: true */
}, {
  title: "可售库存",
  name: "sellStockCount"
}
];


class OrderList extends Component {
  render() {
    const {
      list,
      loading,
      pageInfo: { page, pageSize, totalCount },
      onChange
    } = this.props;

    if (loading) {
      return <Loading show />;
    }

    return (
      <div>
       <Table
        columns={columns}
        datasets={list}
        loading={loading}
        rowKey="item_id"
      />
      <Pagination
          current={page}
          totalItem={totalCount}
          onChange={onChange}
          pageSize={pageSize}
        />
{/*       <div className="order-list-container">
        <div className="order-list-container__table">
          <Affix>
            <div className="order-table__header-region">
              <div className="head-cell text-align-left image-cell">商品</div>
              <div className="head-cell text-align-left title-cell" />
              <div className="head-cell text-align-right price-cell">单价/数量</div>
              <div className="head-cell aftermarket-cell">售后</div>
              <div className="head-cell customer-cell">买家</div>
              <div className="head-cell time-cell">下单时间</div>
              <div className="head-cell state-cell">订单状态</div>
              <div className="head-cell pay-price-cell">实付金额</div>
            </div>
          </Affix>
          {map(list, (item, index) => {
            return <OrderItem key={index} orderInfo={item} />;
          })}
        </div>
        <Pagination
          current={page}
          totalItem={totalCount}
          onChange={onChange}
          pageSize={pageSize}
        />
      </div>  */}
        </div>
    );
  }
}

export default OrderList;
