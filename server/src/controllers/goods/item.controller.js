import Item from '../../models/goods/item'
import Sku from '../../models/goods/sku'

/**
 * 创建商品
 */
export const createItem = async (ctx) => {
  const data = ctx.request.body
  console.log(data)
  try {
    const item = await Item.create({
      // retail_source: 'WEB-RETAIL-AJAX',
      // sku_no: data.sku_no,
      title: data.title,
      price: data.price
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
      response: 2270000,
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
 * 获取商品库列表
 */
export const getSkus = (ctx) => {
  let pageNo = ctx.query.page_no
  let pageSize = 20 || parseInt(ctx.query.page_size)
  let offset = pageSize * (pageNo - 1)
  console.log(pageNo, pageSize, offset)
  return Sku.findAndCountAll({
    limit: pageSize,
    offset: offset
  }).then((result) => {
    // let page = ctx.query.page_no
    // let totalCount = Math.ceil(result.count / limit)
    // offset = limit * (page - 1)

    ctx.body = {
      'response': {
        'paginator': {
          pageSize: pageSize,
          page: pageNo,
          'totalCount': result.count
        },
        'items': result.rows
      }
    }
  }).catch((error) => {
    console.log(error)
    // res.status(500).send('Internal Server Error')
  })
  // const pageSize = param.page_size || 10
  // const page = param.page_no || 1
  // const totalCount = Math.ceil(result.count / limit)
  // offset = limit * (page - 1)
  // ctx.body.status = 200
  // .catch(function (error) {
  //   ctx.body.status = 500
  // })

  // ctx.body = {'response': {'paginator': {'pageSize': 20, 'page': 1, 'totalCount': 2}, 'items': [{'kdtId': 40497547, 'sellChannel': 1, 'lastCostPrice': 0, 'avgCostPrice': 0, 'overSoldNum': 0, 'specifications': '33', 'photoUrl': '[{"url":"https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg"}]', 'createdAt': 1520915504000, 'unit': '件', 'stockLowWarning': true, 'sellStockCount': 0, 'name': '444444444', 'stockNum': 0, 'skuNo': '1234', 'categoryId': 305936, 'skuId': 5907196, 'status': 0, 'updatedAt': 1520915504000, 'stockHighWarning': false}, {'kdtId': 40497547, 'sellChannel': 6, 'lastCostPrice': 0, 'avgCostPrice': 0, 'overSoldNum': 0, 'specifications': '', 'photoUrl': '[{"url":"https://img.yzcdn.cn/upload_files/2015/05/14/FoMCEwRpIbleJqCh7A---MZ-JvUc.png"}]', 'createdAt': 1520734552000, 'unit': '件', 'stockLowWarning': false, 'sellStockCount': 100000, 'name': '实物商品（购买时需填写收货地址，测试商品，不发货，不退款）', 'stockNum': 100000, 'skuNo': 'P000000000000001', 'categoryId': 305936, 'skuId': 5903147, 'status': 0, 'updatedAt': 1520764795000, 'stockHighWarning': false}]}}

  // ctx.body = {'response': {'paginator': {'pageSize': 10, 'page': 1, 'totalCount': 25}, 'items': result}}
  // console.log(goodslist)
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

  getSkus,
  getSku,
  updateSku,
  deleteSkus
}
