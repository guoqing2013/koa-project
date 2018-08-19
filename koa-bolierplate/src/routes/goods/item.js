import Router from 'koa-router'
import item from '../../controllers/goods/item.controller'

const router = Router()

// 新增商品
router.post('/api/oauthentry/youzan.item/3.0.0/create', item.createItem)
// 获取出售中的商品列表
router.get('/api/oauthentry/youzan.items.onsale/3.0.0/get', item.getItems)

export default router
