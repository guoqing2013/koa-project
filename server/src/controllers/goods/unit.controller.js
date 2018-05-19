// import jwt from 'jsonwebtoken'
import Unit from '../../models/goods/unit'

export const create = async (ctx) => {
  const data = ctx.request.body
  console.log(data)
  try {
    const sku = await Unit.create({
      source: data.source,
      status: data.status,
      unit_name: data.unit_name
    })
    ctx.body = {
      unit_id: sku.get('unit_id')
    }
  } catch (e) {

  }
}

export const update = async (ctx) => {
  const data = ctx.request.body
  console.log('updateData', data)
  return Unit.update({
    source: data.source,
    status: data.status,
    unit_name: data.unit_name
  }, {where: {unit_id: data.unit_id}})
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
  return Unit.destroy({where: {unit_id: data.unit_ids, source: data.source}})
    .then((result) => {
      console.log('deleted skus length:', result)
      ctx.body = {
        response: result
      }
    })
}

export const search = (ctx) => {
  let pageNo = ctx.query.page_no
  let pageSize = 20 || parseInt(ctx.query.page_size)
  let offset = pageSize * (pageNo - 1)
  console.log(pageNo, pageSize, offset)
  return Unit.findAndCountAll({
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
