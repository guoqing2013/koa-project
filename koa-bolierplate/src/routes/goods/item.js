import Router from 'koa-router'
import item from '../../controllers/goods/item.controller'

const router = Router()

// 新增商品
router.post('/api/oauthentry/youzan.item/3.0.0/create', item.createItem)

export default router
