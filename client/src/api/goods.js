import ajax from 'zan-pc-ajax';

export function fetchGoodList(data) {
  return ajax({
    url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.skus.search`,
    method: 'GET',
    data
  });
}
