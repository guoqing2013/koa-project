import ajax from 'zan-pc-ajax';

export function fetchGoodList(data) {
  return ajax({
    url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.skus/3.0.0/search`,
    method: 'GET',
    data
  });
}

export function createSku(data) {
  return ajax({
    url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.sku/3.0.0/create`,
    method: 'POST',
    data
  });
}



