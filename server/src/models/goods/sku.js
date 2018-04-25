// 字段定义： https://www.youzanyun.com/apilist/detail/group_item/retail_goods/youzan.retail.product.sku.create
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

const Sku = sequelize.define('sku', {
  // 商品id
  sku_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  retail_source: {
    type: Sequelize.STRING
  },
  // String 否 商品库商品编码（最多20个字符，仅限英文字符与数据组合。如果为空，系统自动生成）
  sku_no: {
    type: Sequelize.STRING
  },
  // String 是 商品库商品名称（名称最多100个字）
  name: {
    type: Sequelize.STRING
  },
  // String 否 商品库商品规格（规格最多100个字）
  specifications: {
    type: Sequelize.STRING
  },
  // Number 是 商品库商品所属分类id
  category_id: {
    type: Sequelize.INTEGER
  },
  // Number 是 成本价（成本价最大为9999999元。单位：分）
  cost_price: {
    type: Sequelize.STRING
  },
  // String 否 图片地址 （需先将图片上传素材银行，使用素材银行的图片地址进行发布 [{"url":"https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg"},{"url":"https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg"}]）
  photo_url: {
    type: Sequelize.JSON
  },
  // String 是 请求来源（需调用方自定义标识：OPEN_XXXX）
  source: {
    type: Sequelize.STRING
  },
  // Number 否 库存数量，保留三位小数，传输值是实际库存值1000倍（初始库存量最大为100000*1000）
  stock_num: {
    type: Sequelize.INTEGER
  },
  // String 是 单位，如：克、千克
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
