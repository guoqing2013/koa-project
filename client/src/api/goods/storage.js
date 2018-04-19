import ajax from 'zan-pc-ajax';

/**
 * 查询商品库接口: https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.skus.search
 */
export function list(data) {
  return ajax({
    url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.skus/3.0.0/search`,
    method: 'GET',
    rawResponse: true,
    data
  });
}

/**
 * 商品库商品创建
 * https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.sku.create
 */
export function create(data) {
  return ajax({
    url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.sku/3.0.0/create`,
    method: 'POST',
    data
  });
}



