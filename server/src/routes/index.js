import Router from 'koa-router'
import sku from './goods/sku'
import unit from './goods/unit'
import category from './goods/category'
import item from './goods/item'
const router = Router()

// router.get('/register', async (ctx, next) => {
//   await ctx.render('register.html')
// })

// router.get('/login', async (ctx, next) => {
//   await ctx.render('login.html')
// })

// router.get('/member', async (ctx, next) => {
//   await ctx.render('member.html')
// })

// routes表示的是路由的嵌套处理
router.use(sku.routes(), sku.allowedMethods())
router.use(unit.routes(), unit.allowedMethods())
router.use(category.routes(), category.allowedMethods())
router.use(item.routes(), item.allowedMethods())

export default router
