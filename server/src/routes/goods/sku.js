import koaRouter from 'koa-router'
import sku from '../../controllers/goods/sku.controller'
const router = koaRouter()
// 商品库商品创建
router.post('/oauthentry/youzan.retail.product.sku/3.0.0/create', sku.create)
// 查询商品库接口
router.get('/oauthentry/youzan.retail.product.skus/3.0.0/search', sku.search)
// 商品库单个商品信息查询
router.get('/oauthentry/youzan.retail.product.sku/3.0.0/get', sku.get)
export default router
