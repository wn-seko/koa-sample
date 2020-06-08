import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import rootRouter from './router/root'
import todoRouter from './router/todo'

const app = new Koa()

// middleware sample
app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  const start = Date.now()
  await next()
  const time = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${time}ms`)
})

// parser
app.use(bodyParser())

// routers
app.use(rootRouter.routes())
app.use(rootRouter.allowedMethods())
app.use(todoRouter.routes())
app.use(todoRouter.allowedMethods())

// error handling
app.on('error', (err) => {
  console.error('server error', err)
})

app.listen(3000)
