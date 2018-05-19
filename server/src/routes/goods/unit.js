import Router from 'koa-router'
import unit from '../../controllers/goods/unit.controller'

const router = Router()

// 创建单位字典
router.post('/api/oauthentry/youzan.retail.product.unit/3.0.0/create', unit.create)
// 编辑单位字典
router.post('/api/oauthentry/youzan.retail.product.unit/3.0.0/update', unit.update)
// 批量删除商品单位
router.post('/api/oauthentry/youzan.retail.product.units/3.0.0/delete', unit.delete)
// 分页查询商品单位
router.get('/api/oauthentry/youzan.retail.product.units/3.0.0/search', unit.search)

export default router
