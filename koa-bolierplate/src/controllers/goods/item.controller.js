import Item from '../../models/goods/item'
import Sku from '../../models/goods/sku'

/**
 * 创建商品
 */
export const createItem = async (ctx) => {
  const data = ctx.request.body
  try {
    const item = await Item.create({
      // retail_source: 'WEB-RETAIL-AJAX',
      // sku_no: data.sku_no,
      title: data.title,
      sell_point: data.sell_point,
      price: data.price,
      quantity: data.quantity,
      origin_price: data.origin_price

      // category_id: 305936,
      // photo_url: [{
      //   'url': 'https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg'
      // }],
      // unit: data.unit,
      // // vendor: {},
      // cost_price: data.cost_price,
      // stock_num: data.stock_num,
      // source: 'WEB_BACK_END',
      // idempotent_no: 1523933651255
    })
    // ctx.response.type = 'application/json'
    ctx.body = {
      item_id: item.get('item_id')
    }
  } catch (e) {

  }
}

/**
 * 商品库单个商品信息查询 sku_id与sku_no二选一必传
 * @param {*} ctx
 */
export const getSku = async (ctx) => {
  const skuId = ctx.query.sku_id
  const result = await Sku.findOne({
    where: {
      sku_id: skuId
    }
  })
  // console.log(result)
  ctx.body = {
    response: result
  }
}

/**
 * 更新SKU
 */
export const updateSku = async (ctx) => {
  const data = ctx.request.body
  console.log('updateData', data)
  return Sku.update({
    name: data.name,
    photo_url: data.photo_url,
    category_id: data.category_id,
    source: data.source,
    sku_no: data.sku_no,
    specifications: data.specifications
  }, {where: {sku_id: data.sku_id}})
    .then((result) => {
      // here your result is simply an array with number of affected rows
      console.log(result)
      ctx.body = {
        response: !!result[0]
      }
    })
}

/**
 * 获取出售中的商品列表
 */
export const getItems = (ctx) => {
  const data = ctx.query;
  let pageNo = data.page_no
  let pageSize = 20 || parseInt(data.page_size)
  let offset = pageSize * (pageNo - 1)
  return Item.findAndCountAll({
    limit: pageSize,
    offset: offset
  }).then((result) => {
    // let page = ctx.query.page_no
    // let totalCount = Math.ceil(result.count / limit)
    // offset = limit * (page - 1)

    ctx.body = {
      response: {
        count: result.count,
        items: result.rows
      }
    }
  }).catch((error) => {
    console.log(error)
    // res.status(500).send('Internal Server Error')
  })
}


const deleteSkus = (ctx) => {
  const data = ctx.request.body
  console.log('delete data', data)
  return Sku.destroy({where: {sku_id: data.sku_ids}})
    .then((result) => {
      console.log('deleted skus length:', result)
      ctx.body = {
        response: result
      }
    })
}

export default {
  createItem,
  getItems,
  getSku,
  updateSku,
  deleteSkus
}
