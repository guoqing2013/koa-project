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
    title: "单位",
    name: "unit",
  }, 
  {
    title: "商品分类",
    bodyRender: (data) => {
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
    title: "可售库存",
    name: "sellStockCount"
  }, 
  {
    title: "创建时间",
    name: "created_at",
    needSort: !0,
    bodyRender: function(data) {
        // var t = e.createdAt;
        // return (0,
        // h.makeDateTimeStr)(t)
        return  <div>{data.createdAt}</div>
    }
  },
 
 
];


class StorageList extends Component {
  render() {
    const props = this.props;

    // if (props.loading) {
    //   return <Loading show />;
    // }

    return (
      <div className="page-block content">
        
       <Table
          autoStick={true}
          className="storage-table"
          columns={columns}
          {...props}
       />
      </div>
    );
  }
}

export default StorageList;
