import Sequelize from 'sequelize'
import sequelize from '../sequelize'

const Goods = sequelize.define('goods', {
  id: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.DataTypes.INTEGER(11),
    allowNull: false
  },
  content: {
    type: Sequelize.DataTypes.CHAR(255),
    allowNull: false
  },
  status: {
    type: Sequelize.DataTypes.INTEGER(1),
    allowNull: false
  }
}, {
  tableName: 'goods_list'
})

sequelize.sync()

export default Goods
