// 字段定义： https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.sku.create
import Sequelize from 'sequelize'
import sequelize from '../../sequelize'

const Sku = sequelize.define('sku', {
  sku_id: {
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
    allowNull: false,
    comment: "I'm a comment!"
  }
}, {
  tableName: 'goods_list'
})

sequelize.sync()

export default Sku
