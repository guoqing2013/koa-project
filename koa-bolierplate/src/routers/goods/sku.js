import Router from 'koa-router'
import sku from '../../controllers/goods/sku.controller'

const router = Router()

// 商品库商品创建
router.post('/api/oauthentry/youzan.retail.product.sku/3.0.0/create', sku.createSku)
// 查询商品库接口
router.get('/api/oauthentry/youzan.retail.product.skus/3.0.0/search', sku.getSkus)
// 商品库商品编辑
router.post('/api/oauthentry/youzan.retail.product.sku/3.0.0/update', sku.updateSku)
// 商品库商品批量删除
router.post('/api/oauthentry/youzan.retail.product.skus/3.0.0/delete', sku.deleteSkus)
// 商品库单个商品信息查询
router.get('/api/oauthentry/youzan.retail.product.sku/3.0.0/get', sku.getSku)

export default router
