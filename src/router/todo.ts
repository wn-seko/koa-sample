import Koa from 'koa'
import Router from '@koa/router'

const router = new Router({ prefix: '/todos' })

router.get('/:id', async (ctx: Koa.Context) => {
  ctx.body = ctx.params['id']
})

router.post('/', async (ctx: Koa.Context) => {
  ctx.body = ctx.request.body
})

export default router
