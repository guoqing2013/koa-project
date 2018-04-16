import koaRouter from 'koa-router'
import goods from '../controllers/goods.controller.js'
const router = koaRouter()

router.get('/oauthentry/youzan.retail.product.skus.search', goods.search)

export default router
