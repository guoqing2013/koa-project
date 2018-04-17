import koaRouter from 'koa-router'
import goods from '../../controllers/goods/sku.controller'
const router = koaRouter()
// 商品库商品创建
router.post('/oauthentry/youzan.retail.product.sku/3.0.0/create', goods.create)
// 查询商品库接口
router.get('/oauthentry/youzan.retail.product.skus.search', goods.search)

export default router
