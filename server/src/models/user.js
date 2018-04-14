import Sequelize from 'sequelize'
import sequelize from '../sequelize'

const User = sequelize.define('user', {
  id: {
    type: Sequelize.DataTypes.INTEGER(11), // 字段类型
    allowNull: false, // 是否允许为NULL
    primaryKey: true, // 主键
    autoIncrement: true // 是否自增
  },
  mobile: {
    // type: Sequelize.DataTypes.INTEGER(11),
    type: Sequelize.DataTypes.CHAR(11),
    allowNull: false,
    unique: true
  },
  // user_name: {
  //   // type: Sequelize.DataTypes.CHAR(50),
  //   type: Sequelize.STRING,
  //   allowNull: true,
  //   unique: true
  // },
  password: {
    type: Sequelize.DataTypes.CHAR(128),
    allowNull: false
  }
}, {
  tableName: 'user',
  freezeTableName: true // 模型所对应表的表名，设置freezeTableName 为 true时，才会严格使用模型名
})

sequelize.sync({
  // force: true //这个参数绝对禁止放入生产环境中，此参数会强制删除原表，然后创建一张新表
}) // 同步模型到数据库

export default User
