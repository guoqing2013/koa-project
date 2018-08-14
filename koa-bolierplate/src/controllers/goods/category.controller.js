// import jwt from 'jsonwebtoken'
import Category from '../../models/goods/category'

export const create = async (ctx) => {
  const data = ctx.request.body
  console.log(data)
  try {
    const sku = await Category.create({
      source: data.source,
      parent_id: data.parent_id,
      category_name: data.name
    })
    ctx.body = {
      category_id: sku.get('category_id')
    }
  } catch (e) {

  }
}

export const update = async (ctx) => {
  const data = ctx.request.body
  console.log('updateData', data)
  return Category.update({
    source: data.source,
    category_name: data.category_name
  }, {where: {category_id: data.category_id}})
    .then((result) => {
      // here your result is simply an array with number of affected rows
      console.log(result)
      ctx.body = {
        response: !!result[0]
      }
    })
}

const deletes = (ctx) => {
  const data = ctx.request.body
  console.log('delete data', data)
  return Category.destroy({where: {category_id: data.category_id, source: data.source}})
    .then((result) => {
      console.log('deleted skus length:', result)
      ctx.body = {
        response: result
      }
    })
}

export const search = (ctx) => {
  let pageNo = ctx.query.page_no
  let pageSize = parseInt(ctx.query.page_size)
  let offset = pageSize * (pageNo - 1)
  console.log(pageNo, pageSize, offset)
  return Category.findAndCountAll({
    limit: pageSize,
    offset: offset
  }).then((result) => {
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
  })
}

export default {
  create,
  update,
  deletes,
  search
}
