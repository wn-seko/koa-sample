import Koa from 'koa'
import Router from '@koa/router'

import rootRouter from './router/root'
import todoRouter from './router/todo'

const app = new Koa()
const router = new Router()

// middleware sample
app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  const start = Date.now()
  await next()
  const time = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${time}ms`)
})

// routers
app.use(rootRouter.routes())
app.use(todoRouter.routes())
app.use(router.routes()).use(router.allowedMethods())

app.on('error', (err) => {
  console.error('server error', err)
})

app.listen(3000)