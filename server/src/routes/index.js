import koaRouter from 'koa-router'
const router = koaRouter()

router.get('/register', async (ctx, next) => {
  await ctx.render('register.html')
})

router.get('/login', async (ctx, next) => {
  await ctx.render('login.html')
})

router.get('/member', async (ctx, next) => {
  await ctx.render('member.html')
})

export default router
