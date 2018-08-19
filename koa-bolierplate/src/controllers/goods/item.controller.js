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
  let pageSize =  parseInt(data.page_size)
  let offset = pageSize * (pageNo - 1)
  // order_by
  // column
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

    // ctx.body = {
    //   response: {
    //       "items":[{"sync_status":0,"item_id":"411425915","title":"\u5b9e\u7269\u5546\u54c1\uff08\u8d2d\u4e70\u65f6\u9700\u586b\u5199\u6536\u8d27\u5730\u5740\uff0c\u6d4b\u8bd5\u5546\u54c1\uff0c\u4e0d\u53d1\u8d27\uff0c\u4e0d\u9000\u6b3e\uff09","alias":"278zxdnn7llvr","price":"1.00","created_time":"2018-03-17 11:32:54","num":"0","image_url":"https:\/\/img.yzcdn.cn\/upload_files\/2015\/05\/14\/Fq9Xi4vSuS8D804oC_1CD04sb8uA.png","buy_url":"","stock_num":"999999","sold_num":0,"buy_way":"1","visit_count_uv":0,"visit_count_pv":0,"tags":[],"is_display":["koudaitong"],"is_display_num":1,"is_virtual":0,"goods_type":0,"is_lock":0,"is_used":0,"freezing_endtime":"0000-00-00 00:00:00","is_edit_lock":0,"fx_auth":1,"url":"https:\/\/h5.youzan.com\/v2\/goods\/278zxdnn7llvr","changed_info":[],"changed_description":"","offline_count":0,"item_lock_types":[],"card_alias":null,"video_model":null,"goods_platform":0,"sku_size":0,"pre_sale_mark":-1},{"sync_status":0,"item_id":"411425833","title":"\u7535\u5b50\u5361\u5238\uff08\u8d2d\u4e70\u65f6\u65e0\u9700\u586b\u5199\u6536\u8d27\u5730\u5740\uff0c\u6d4b\u8bd5\u5546\u54c1\uff0c\u4e0d\u53d1\u8d27\uff0c\u4e0d\u9000\u6b3e\uff09","alias":"3ewq4y32h2m5z","price":"1.00","created_time":"2018-03-17 11:32:54","num":"0","image_url":"https:\/\/img.yzcdn.cn\/public_files\/2016\/08\/23\/554c17f049181649f35168d8fb367663.jpg","buy_url":"","stock_num":"999999","sold_num":0,"buy_way":"1","visit_count_uv":0,"visit_count_pv":0,"tags":[],"is_display":["koudaitong"],"is_display_num":1,"is_virtual":3,"goods_type":0,"is_lock":0,"is_used":0,"freezing_endtime":"0000-00-00 00:00:00","is_edit_lock":0,"fx_auth":1,"url":"https:\/\/h5.youzan.com\/v2\/goods\/3ewq4y32h2m5z","changed_info":[],"changed_description":"","offline_count":0,"item_lock_types":[],"card_alias":null,"video_model":null,"goods_platform":0,"sku_size":0,"pre_sale_mark":-1}],
    //       "total":2,
    //   }
    // }
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
