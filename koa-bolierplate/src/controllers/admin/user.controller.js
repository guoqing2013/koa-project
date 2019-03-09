import User from '../../models/admin/user';
import { sign } from '../../services/jwt';
import bcrypt from 'bcryptjs'


/**
 * 注册
 */
const register = async (ctx) => {
  const data = ctx.request.body;
  const {username, password} = data;
  if(username.trim() == '' || password.trim() == '') {

  }
  const passwd = bcrypt.hashSync(data.password, bcrypt.genSaltSync(8), null)
  await User
    .findOrCreate({
      where: {
        username: data.username
      },
      defaults: {
        password: passwd
      }
    })
    .spread((user, created) => {
      if (created) {
        ctx.status = 200
        ctx.body = {
          username: user.get('username'),
          message: '注册成功'
        }
      } else {
        ctx.status = 200
        ctx.body = {
          message: '该账号已注册'
        }
      }
    })

}

/**
 * 登陆
 */
const login = async (ctx) => {
  const data = ctx.request.body;
  const user = await User.findOne({
    where: {
      username: data.username
    }
  });
  let response;
  if(user) {
    if(bcrypt.compareSync(data.password, user.password)) {
      const token = await sign(user.id)
      response = {
        code: 200,
        data: {
          token,
          tokenHead: "Bearer "
        },
        message: "操作成功"
      }
    } else {
      response = {
        code: 500,
        message: '密码错误'
      }
    }
  } else {
    response = {
      code: 500,
      message: "用户不存在！"
    }
  }
  ctx.body = response;
} 

export default {
  register,
  login,
  // getUserInfo,
  // postUserAuth
}
