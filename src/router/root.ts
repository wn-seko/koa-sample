import Koa from 'koa'
import Router from '@koa/router'

const router = new Router()

router.get('/', async (ctx: Koa.Context) => {
  ctx.body = 'Hello World'
})

export default router
