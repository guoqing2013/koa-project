import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/oauthentry/youzan.items.onsale/3.0.0/get',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createGoods(data) {
  return request({
    url: '/api/oauthentry/youzan.item/3.0.0/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
