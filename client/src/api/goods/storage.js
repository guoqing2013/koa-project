import ajax from 'zan-pc-ajax';

/**
 * 查询商品库接口:
 *  https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.skus.search
 */
export const loadList = (data) => {
  return ajax({
    url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.skus/3.0.0/search`,
    method: 'GET',
    rawResponse: true,
    data
  });
}

export const getAllCat = () => {
  return ajax({
    url: "/youzan.retail.product.category.biz/1.0.0/querycategories",
    method: 'GET',
  });
}

export function batchUpdateCategory(data) {
  return ajax({
    url: "/youzan.retail.product.biz.sku/1.0.0/batchupdate",
    method: 'post',
    data
  });
}

// export function batchDeleteInfo(data) {
//   return ajax({
//     url: "/youzan.retail.product.biz.sku/1.0.0/batchdeleteinfo",
//     method: 'get',
//     data
//   });
// }


// export function batchDeleteGoods(data) {
//   return ajax({
//     url: "/youzan.retail.product.biz.sku/1.0.0/batchdelete",
//     method: 'post',
//     data
//   });
// }


// /**
//  * 商品库商品创建
//  * https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.sku.create
//  */
// export function create(data) {
//   return ajax({
//     url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.sku/3.0.0/create`,
//     method: 'POST',
//     data
//   });
// }



export default {
  loadList,
  getAllCat
}