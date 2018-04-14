import config from './config/index'
import Sequelize from 'sequelize'

// console.log('config', config)

const sequelize = new Sequelize(`mysql://${config.mysql.opts.user}:${config.mysql.opts.pass}@localhost/todolist`, {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})

// 验证连接
// sequelize.authenticate() -> Promise
sequelize
  .authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.')
  }).catch((err) => {
    console.log('Unable to connect to the database:', err)
  })

sequelize.Promise = global.Promise

export default sequelize // 将Todolist暴露出接口方便Model调用
