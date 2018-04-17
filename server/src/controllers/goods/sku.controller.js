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
  const id = 1
  const result = await Sku.findAll({ // 查找全部的todolist
    where: {
      // user_id: id
    },
    attributes: ['id', 'content', 'status'] // 只需返回这三个字段的结果即可
  })
  ctx.body = {
    success: true,
    result // 将请求的结果放到response的body里返回
  }
  // console.log(goodslist)
}

export default {
  search,
  create
}
