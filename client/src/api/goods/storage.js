import commonAjax from 'common/commonAjax';

/**
 * 查询商品库接口:
 *  https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.skus.search
 */
export const loadList = (data) => {
  return commonAjax({
    // url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.skus/3.0.0/search`,
    url: "/youzan.retail.product.skus/3.0.0/search",
    // method: 'GET',
    // rawResponse: true,
    data
  });
}

export const getAllCat = () => {
  return commonAjax({
    url: "/youzan.retail.product.category.biz/1.0.0/querycategories",
    method: 'GET',
  });
}

export const batchUpdateCategory = (data) => {
  return commonAjax({
    url: "/youzan.retail.product.biz.sku/1.0.0/batchupdate",
    method: 'post',
    data
  });
}

export const batchDeleteInfo = (data) => {
  return commonAjax({
    url: "/youzan.retail.product.biz.sku/1.0.0/batchdeleteinfo",
    method: 'get',
    data
  });
}


export const batchDeleteGoods = (data) => {
  return commonAjax({
    url: "/youzan.retail.product.biz.sku/1.0.0/batchdelete",
    method: 'post',
    data
  });
}


// /**
//  * 商品库商品创建
//  * https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.sku.create
//  */
// export function create(data) {
//   return commonAjax({
//     url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.sku/3.0.0/create`,
//     method: 'POST',
//     data
//   });
// }


