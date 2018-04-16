import axios from 'axios'

export function fetchGoodList(data) {
  return axios.get(`${_global.url.demo}/api/oauthentry/youzan.retail.product.skus.search`, data)
  .then((response) => {
    return {response};
  })
  .catch((error) => ({error}));
  // return axios.get({
  //   url: `${_global.url.demo}/api/oauthentry/youzan.retail.product.skus.search`,
  //   method: 'GET',
  //   data
  // });
}
