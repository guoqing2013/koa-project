import Router from 'koa-router'
import category from '../../controllers/goods/category.controller'

const router = Router()

// 新增商品分类
router.post('/api/oauthentry/youzan.retail.product.category/3.0.0/create', category.create)
// 更新分类
router.post('/api/oauthentry/youzan.retail.product.category/3.0.0/update', category.update)
// 删除商品分类
router.post('/api/oauthentry/youzan.retail.product.category/3.0.0/delete', category.deletes)
// 查询分类列表
router.get('/api/oauthentry/youzan.retail.product.categories/3.0.0/search', category.search)

export default router
