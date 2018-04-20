import jwt from 'jsonwebtoken'
import Sku from '../../models/goods/sku'

/**
 * 创建商品
 */
export const create = async (ctx) => {
  const body = ctx.request.body
  // const body = {
  //   retail_source: 'WEB-RETAIL-AJAX',
  //   sku_no: 'tiaoxinma',
  //   name: 'name33',
  //   specifications: 'guige',
  //   category_id: 305936,
  //   photo_url: [{'url': 'https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg'}],
  //   unit: '件',
  //   // vendor: {},
  //   cost_price: 333,
  //   stock_num: 3000,
  //   source: 'WEB_BACK_END',
  //   idempotent_no: 1523933651255
  // }
  try {
    const sku = await Sku.create({
      retail_source: 'WEB-RETAIL-AJAX',
      sku_no: body.sku_no,
      name: body.name,
      specifications: body.specifications,
      category_id: 305936,
      photo_url: [{'url': 'https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg'}],
      unit: body.unit,
      // vendor: {},
      cost_price: body.cost_price,
      stock_num: body.stock_num,
      source: 'WEB_BACK_END',
      idempotent_no: 1523933651255
    })
    // ctx.response.type = 'application/json'
    ctx.body = {
      response: 2270000,
      sku_id: sku.get('sku_id')
    }
  } catch (e) {

  }
}

/**
 * 获取商品库列表
 */
export const search = async (ctx) => {
  // const id = ctx.params.id // 获取url里传过来的参数里的id
  const result = await Sku.findAll({ // 查找全部的todolist
    where: {
      // user_id: id
    }
    // attributes: ['id', 'content', 'status'] // 只需返回这三个字段的结果即可
  })
  ctx.body = {'response': {'paginator': {'pageSize': 20, 'page': 1, 'totalCount': 2}, 'items': [{'kdtId': 40497547, 'sellChannel': 1, 'lastCostPrice': 0, 'avgCostPrice': 0, 'overSoldNum': 0, 'specifications': '33', 'photoUrl': '[{"url":"https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg"}]', 'createdAt': 1520915504000, 'unit': '件', 'stockLowWarning': true, 'sellStockCount': 0, 'name': '444444444', 'stockNum': 0, 'skuNo': '1234', 'categoryId': 305936, 'skuId': 5907196, 'status': 0, 'updatedAt': 1520915504000, 'stockHighWarning': false}, {'kdtId': 40497547, 'sellChannel': 6, 'lastCostPrice': 0, 'avgCostPrice': 0, 'overSoldNum': 0, 'specifications': '', 'photoUrl': '[{"url":"https://img.yzcdn.cn/upload_files/2015/05/14/FoMCEwRpIbleJqCh7A---MZ-JvUc.png"}]', 'createdAt': 1520734552000, 'unit': '件', 'stockLowWarning': false, 'sellStockCount': 100000, 'name': '实物商品（购买时需填写收货地址，测试商品，不发货，不退款）', 'stockNum': 100000, 'skuNo': 'P000000000000001', 'categoryId': 305936, 'skuId': 5903147, 'status': 0, 'updatedAt': 1520764795000, 'stockHighWarning': false}]}}

  // ctx.body = {'response': {'paginator': {'pageSize': 10, 'page': 1, 'totalCount': 25}, 'items': result}}
  // console.log(goodslist)
}

export default {
  search,
  create
}
