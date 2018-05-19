import Sequelize from 'sequelize'
import sequelize from '../../sequelize'

/**
 * 参考下: https://github.com/Rishabhk07/backend-news-app
 */

/* {
  'kdtId': 40497547,
  'lastCostPrice': 0,
  'sellChannel': 6,
  'overSoldNum': 0,
  'avgCostPrice': 0,
  'specifications': '',
  'photoUrl': '[{"url":"https://img.yzcdn.cn/upload_files/2015/05/14/FoMCEwRpIbleJqCh7A---MZ-JvUc.png"}]',
  'createdAt': 1520734552000,
  'unit': '件',
  'sellStockCount': 100000,
  'stockLowWarning': false,
  'name': '实物商品（购买时需填写收货地址，测试商品，不发货，不退款）',
  'stockNum': 100000,
  'skuNo': 'P000000000000001',
  'skuId': 5903147,
  'categoryId': 305936,
  'updatedAt': 1520764795000,
  'stockHighWarning': false,
  'status': 0
} */

const Unit = sequelize.define('unit', {
  // Number 否 保存成功的单位id
  unit_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // String 是 请求来源（需调用方自定义标识：OPEN_XXXX）
  source: {
    type: Sequelize.STRING
  },
  // Number 否 状态（0表示禁用，1表示启用）
  status: {
    type: Sequelize.DataTypes.INTEGER(1)
  },
  // String 是 单位名称
  unit_name: {
    type: Sequelize.STRING
  }
}, {
  // tableName: 'sku'
})

sequelize.sync()

export default Unit
