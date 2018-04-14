import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// const createUser = async (data) => {
//   const userInfo = await User.create({
//     mobile: data.mobile,
//     password: data.password
//   })
//   return userInfo
// }

const getUserById = async function (id) { // 注意是async function 而不是function。对于需要等待promise结果的函数都需要async await。
  const userInfo = await User.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })

  return userInfo // 返回数据
}

const getUserByName = async function (name) {
  const userInfo = await User.findOne({
    where: {
      user_name: name
    }
  })

  return userInfo
}

const user = {
  // createUser,
  getUserById, // 导出getUserById的方法，将会在controller里调用
  getUserByName
}

/**
 * 注册
 */
const register = async (ctx) => {
  const data = ctx.request.body
  const passwd = bcrypt.hashSync(data.password, bcrypt.genSaltSync(8), null)
  try {
  await User
    .findOrCreate({
      where: {
        mobile: parseInt(data.mobile)
      },
      defaults: {
        password: passwd
      }
    })
    .spread((user, created) => {
      if (created) {
        ctx.status = 200
        ctx.body = {
          mobile: user.get('mobile'),
          message: '注册成功'
        }
      } else {
        ctx.status = 200
        ctx.body = {
          message: '该手机号已注册'
        }
      }
    })
  } catch (e) {
    console.log(e)
  }
}

const getUserInfo = async function (ctx) {
  const id = ctx.params.id // 获取url里传过来的参数里的id
  const result = await user.getUserById(id) // 通过await “同步”地返回查询结果
  ctx.body = result // 将请求的结果放到response的body里返回
}

/**
 * 登陆接口
 */
const login = async (ctx) => {
  const data = ctx.request.body
  const user = await User.findOne({
    where: {
      mobile: data.mobile
    }
  })
  if (user) {
    if (bcrypt.compareSync(data.password, user.password)) {
      const userToken = {
        mobile: user.mobile,
        id: user.id
      }
      const secret = 'secret' // 指定密钥
      const token = jwt.sign(userToken, secret) // 签发token
      ctx.body = {
        token // 返回token
      }
    } else {
      // ctx.status = 401
      ctx.body = {
        message: '密码错误'
      }
    }
  } else {
    // ctx.status = 401
    ctx.body = {
      message: '用户不存在！' // 如果用户不存在返回用户不存在
    }
  }
}

// const postUserAuth = async function (ctx) {
//   const data = ctx.request.body // post过来的数据存在request.body里
//   const userInfo = await user.getUserByName(data.name)
//   if (userInfo != null) { // 如果查无此用户会返回null
//     if (!bcrypt.compareSync(data.password, userInfo.password)) {
//       ctx.body = {
//         success: false, // success标志位是方便前端判断返回是正确与否
//         info: '密码错误！'
//       }
//     } else {
//       const userToken = {
//         name: userInfo.user_name,
//         id: userInfo.id
//       }
//       const secret = 'vue-koa-demo' // 指定密钥
//       const token = jwt.sign(userToken, secret) // 签发token
//       ctx.body = {
//         success: true,
//         token: token // 返回token
//       }
//     }
//   } else {
//     ctx.body = {
//       success: false,
//       info: '用户不存在！' // 如果用户不存在返回用户不存在
//     }
//   }
// }

export default {
  register,
  login,
  getUserInfo,
  // postUserAuth
}
