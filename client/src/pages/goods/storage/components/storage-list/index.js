import React, { Component } from 'react';
import { Loading, Pagination, Affix, Table  } from 'zent';
import map from 'lodash/map';
import utils from 'common/utils';
import Meta from '../Meta';
import './style.css';


const columns = [
  {
  title: '商品名称',
  width: 30,
  bodyRender: (data) => {
    return (
      <div >
        <Meta name={data.name}  photoUrl={utils.compatibleImg(data.photoUrl)} skuNo={data.skuNo} />
      </div>
    );
  },
  // width: '30'
  },
  {
    title: "规格",
    width: 9,
    bodyRender: (data) => {
      return (
        <div>{data.specifications || '-'}</div>
      );
    },
  }, 
  {
    title: "商品分类",
    bodyRender: (data) => {
      console.log(33333333333,this);
      return (
        <div>{data.categoryId}</div>
      );
    }
  }, 
  {
    title: "销售渠道",
    bodyRender: (data) => {
      return (
        <div>{data.sellChannel}</div>
      );
    },
  }, 
  {
    title: "单位",
    name: "unit",
  }, 
  {
    title: "可售库存",
    name: "sellStockCount"
  }
];


class StorageList extends Component {
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
      <div className="page-block content">
        
       <Table
        rowKey="skuId"
        autoStick={true}
        className="storage-table"
        columns={columns}
        datasets={list}
        loading={loading}
        id2cat={
          {305936: "未分类"}
        }
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

export default StorageList;
