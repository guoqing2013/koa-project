// 字段定义： https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.sku.create
import Sequelize from 'sequelize'
import sequelize from '../../sequelize'

/**
 * 参考下: https://github.com/Rishabhk07/backend-news-app
 */

const Sku = sequelize.define('sku', {
  sku_id: { // 商品库商品id
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  retail_source: {
    type: Sequelize.STRING
  },
  sku_no: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  specifications: {
    type: Sequelize.STRING
  },
  category_id: {
    type: Sequelize.INTEGER
    // allowNull: false
  },
  cost_price: {
    type: Sequelize.STRING
  },
  photo_url: {
    type: Sequelize.JSON
  },
  source: {
    type: Sequelize.STRING
  },
  stock_num: {
    type: Sequelize.INTEGER
  },
  unit: {
    type: Sequelize.STRING
  }
  // status: {
  //   type: Sequelize.DataTypes.INTEGER(1)
  // }
}, {
  tableName: 'sku'
})

sequelize.sync()

export default Sku
