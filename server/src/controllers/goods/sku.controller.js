import jwt from 'jsonwebtoken'
import Goods from '../../models/goods/sku'

/**
 * 创建商品
 */
export const create = async () => {
  await 222
}

/**
 * 获取商品库列表
 */
export const search = async (ctx) => {
  // const id = ctx.params.id // 获取url里传过来的参数里的id
  const id = 1
  const result = await Goods.findAll({ // 查找全部的todolist
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
