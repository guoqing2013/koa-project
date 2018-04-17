// import { createServer } from './lib/server'
// import { env } from './lib/env'
// import { logger } from './lib/logger'

// createServer().then(
//   app =>
//     app.listen(env.PORT, () => {
//       const mode = env.NODE_ENV
//       logger.debug(`Server listening on ${env.PORT} in ${mode} mode`)
//     }),
//   err => {
//     logger.error('Error while starting up server', err)
//     process.exit(1)
//   }
// )

import config from './config/index'
import Koa from 'koa'
import cors from '@koa/cors'
import json from 'koa-json'
import logger from 'koa-logger'
// import auth from './routes/auth.js'
// import api from './routes/api.js'
import sku from './routes/goods/sku.js'
import route from './routes'
import jwt from 'koa-jwt'
import path from 'path'
import serve from 'koa-static'
import historyApiFallback from 'koa2-history-api-fallback'
import koaRouter from 'koa-router'
import koaBodyparser from 'koa-bodyparser'
import views from 'koa-views'
import nunjucksMiddleWare from './middlewares/nunjucks'
// import { env } from './lib/env'

const app = new Koa()
const router = koaRouter()

// let port = process.env.PORT

app.use(cors())
app.use(koaBodyparser())
app.use(json())
app.use(logger())

app.use(async function (ctx, next) {
  let start = new Date()
  await next()
  let ms = new Date() - start
  console.log('%s %s - %s', ctx.method, ctx.url, ms)
})

app.use(serve(path.join(__dirname, '../../')))

nunjucksMiddleWare()

app.use(views(path.join(__dirname, '/views'), {
  map: { // opts.map: Map a file extension to an engine
    html: 'nunjucks' // In this example, each file ending with .html will get rendered using the nunjucks templating engine.
  }
}))

app.use(async function (ctx, next) { //  如果JWT验证失败，返回验证失败信息
  try {
    await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      }
    } else {
      throw err
    }
  }
})

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

router.use(route.routes()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
// router.use('/auth', auth.routes()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
// router.use('/api', /*  jwt({secret: 'vue-koa-demo'}), */ api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。
router.use('/api', /*  jwt({secret: 'vue-koa-demo'}), */ sku.routes()) // 所有走/api/打头的请求都需要经过jwt验证。

app.use(router.routes()) // 将路由规则挂载到Koa上。
app.use(historyApiFallback())
app.use(serve(path.resolve('dist'))) // 将webpack打包好的项目目录作为Koa静态文件服务的目录

// const port = env.PORT;
export default app.listen(config.app.port, () => {
  console.log(`Koa is listening in ${config.app.port}`)
})
