// import jwt from 'jsonwebtoken'
import joi from 'joi'
import Unit from '../../models/goods/unit'

const unitSchemaCreate = joi.object({
  unit_name: joi
    .string()
    .min(1)
    .max(20)
    .required(),
  source: joi
    .string()
    .required(),
  status: joi
    .number()
    .integer(),
  userId: joi
    .number()
    .integer()
    .required(),
  ipAddress: joi
    .string()
    .required()
})

class UnitController {
  static async create (ctx) {
    const body = ctx.request.body

    // Attach logged in user
    //  const user = new User(ctx.state.user)
    //  body.userId = user.id
    body.userId = 1

    // Add ip
    body.ipAddress = ctx.ip
    console.log(body)

    // Validate the newly created note
    const validator = joi.validate(body, unitSchemaCreate)
    if (validator.error) {
      ctx.throw(400, validator.error.details[0].message)
    }

    try {
      const sku = await Unit.create({
        source: body.source,
        status: body.status,
        unit_name: body.unit_name
      })
      ctx.body = { unit_id: sku.get('unit_id') }
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA')
    }
  }

  static async update (ctx) {
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

  static async delete (ctx) {
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

  static async search (ctx) {
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
}

export default UnitController
