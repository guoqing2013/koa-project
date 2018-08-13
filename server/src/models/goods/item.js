// 字段定义： https://www.youzanyun.com/apilist/detail/group_item/item/youzan.item.create
import Sequelize from 'sequelize'
import sequelize from '../../sequelize'

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

const Item = sequelize.define('item', {

  // 商品id
  item_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // ---------分割线-------//

  // auto_listing_time Number 否 开始出售时间。默认0，设置为0 立即出售
  auto_listing_time: {
    type: Sequelize.DECIMAL
  },

  // buy_quota Number 否 每人限购多少件。0代表无限购，默认为0
  buy_quota: {
    type: Sequelize.INTEGER
  },

  // cid Number 否 商品分类的叶子类目id
  cid: {
    type: Sequelize.INTEGER
  },

  // delivery_template_id Number 否 运费模版id
  delivery_template_id: {
    type: Sequelize.INTEGER
  },

  // desc String 是 商品描述。字数要大于5个字符，小于25000个字符 ，受违禁词控制
  desc: {
    type: Sequelize.STRING
  },

  // etd_days Number 否 付款成功 后发货天数, 默认0
  etd_days: {
    type: Sequelize.INTEGER
  },

  // etd_end String 否 预计发货结束时间, 字符串格式的时间
  etd_end: {
    type: Sequelize.STRING
  },

  // etd_start String 否 预计发货开始时间, 字符串格式的时间
  etd_start: {
    type: Sequelize.STRING
  },

  // etd_type Number 否 发货类型: 0, xxx 时间开始发货, 1, 付款 n 天后发货。
  etd_type: {
    type: Sequelize.INTEGER
  },

  // hide_stock Number 否 是否隐藏商品库存。在商品展示时不显示商品的库存，默认0 显示库存，设置为1 不显示库存
  hide_stock: {
    type: Sequelize.INTEGER
  },

  // hotel_extra String 否 酒店扩展信息，按以下格式： { "service_tel_code":"0571",//服务电话区号 "service_tel":"4790043"//服务电话 }
  hotel_extra: {
    type: Sequelize.JSON
  },

  // image_ids String 是 图片id列表，用逗号分隔。可以通过 youzan.materials.storage.platform.img.upload 上传图片接口去上传图片后获取图片id 。
  image_ids: {
    type: Sequelize.STRING
  },

  // is_display Number 否 是否上架商品。默认1 上架商品，设置为0 不上架商品，放入仓库
  is_display: {
    type: Sequelize.INTEGER
  },

  // item_no String 否 商品货号（商家为商品设置的外部编号）
  item_no: {
    type: Sequelize.STRING
  },

  // item_type Number 否 商品类型 0：普通商品 35：酒店商品 60：虚拟商品 61：电子卡券
  item_type: {
    type: Sequelize.INTEGER
  },

  // item_weight Number 否 商品重量，没有SKU时用
  item_weight: {
    type: Sequelize.INTEGER
  },

  // join_level_discount Number 否 是否参加会员折扣。默认1，设置为1 参加会员折扣
  join_level_discount: {
    type: Sequelize.INTEGER
  },

  // messages String 否 商品留言
  messages: {
    type: Sequelize.STRING
  },

  // origin_price String 否 商品划线价格，可以自定义。例如 促销价：888
  origin_price: {
    type: Sequelize.STRING
  },

  // post_fee Number 否 运费，单位分
  post_fee: {
    type: Sequelize.INTEGER
  },

  // pre_sale Boolean 否 是否预售
  pre_sale: {
    type: Sequelize.BOOLEAN
  },

  // pre_sale_end String 否 预售结束时间, 字符串格式的时间
  pre_sale_end: {
    type: Sequelize.STRING
  },

  // price Number 是 价格，单位分
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  // purchase_right Boolean 否 是否设置商品购买权限
  purchase_right: {
    type: Sequelize.BOOLEAN
  },

  // quantity Number 否 总库存
  quantity: {
    type: Sequelize.INTEGER
  },

  // sell_point String 否 商品卖点信息
  sell_point: {
    type: Sequelize.STRING
  },

  // sku_images String 否 SKU图片，仅支持第一级规格， 参数一定要与sku_stocks参数匹配， 如sku_stocks参数是这样的 [ { "price":10000, "quantity":100, "item_no":"MOYU-1", "skus":[ { "k":"颜色", "v":"绿色", }, { "k":"尺寸", "v":"l", }, { "k":"内存", "v":"1024G", } ] }, { "price":10000, "quantity":100, "item_no":"MOYU-2","skus":[ { "k":"颜色", "v":"绿色", }, { "k":"尺寸", "v":"l", }, { "k":"内存", "v":"16G", } ] } ] 颜色就是第一级规格。它下面的规格只有“绿色”这一项，sku_images应该与之一一对应，如下 [{"v":"绿色","img_url":"www.youzan.com"}] 请务必按此格式传参数，不然校验通不过，无法新增商品
  sku_images: {
    type: Sequelize.STRING
  },

  // sku_stocks String 否 sku 的JSON字符串，传入一定要按照这个格式[ { "price":10000, "quantity":100, "item_no":"MOYU-1", "skus":[ { "k":"颜色", "v":"绿色", }, { "k":"尺寸", "v":"l", }, { "k":"内存", "v":"1024G", } ] }, { "price":10000, "quantity":100, "item_no":"MOYU-2","skus":[ { "k":"颜色", "v":"绿色", }, { "k":"尺寸", "v":"l", }, { "k":"内存", "v":"16G", } ] } ] price是 sku 价格，quantity 是sku 的库存，item_no 是 sku 的商家编码，k 是规格名称，v 是规格值名称 要注意：sku_stocks数量=规格1数量 * 规格2数量 * 规格3数量
  sku_stocks: {
    type: Sequelize.STRING
  },

  // sku_weight String 否 SKU重量带有SKU时用 按如下格式 “100，200” 由重量组成并且和SKU对应 顺序由业务方来维护
  sku_weight: {
    type: Sequelize.STRING
  },

  // tag_ids String 否 分组列表
  tag_ids: {
    type: Sequelize.STRING
  },

  // template_id Number 否 商品页模板
  template_id: {
    type: Sequelize.INTEGER
  },

  // title String 是 商品标题。不能超过100字，受违禁词控制
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // ump_level String 否 允许购买的粉丝等级，用逗号分隔
  ump_level: {
    type: Sequelize.INTEGER
  },

  // ump_tags String 否 允许购买的粉丝标签，用,号分隔
  ump_tags: {
    type: Sequelize.INTEGER
  },

  // virtual_extra String 否 虚拟信息扩展信息，一定要按如下JSON格式，否则校验不通过 { "item_validity_start":2322222,//虚拟商品有效期开始时间, 1970-01-01 开始的秒数,留空表示长期有效 "item_validity_end":2322222,//虚拟商品有效期结束时间,1970-01-01 开始的秒数,留空表示长期有效 "effective_type":1,//电子凭证生效类型，0 立即生效， 1 自定义推迟时间， 2 隔天生效 "effective_delay_hours":1,//电子凭证自定义推迟时间 "holidays_available":true//节假日是否可用 }
  virtual_extra: {
    type: Sequelize.INTEGER
  }

}, {
  tableName: 'item'
})

sequelize.sync()

export default Item
