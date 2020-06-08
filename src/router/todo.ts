import Koa from 'koa'
import Router from '@koa/router'

const router = new Router({ prefix: '/todos' })

router.get('/:id', function (ctx: Koa.Context) {
  ctx.body = ctx.params['id']
})

export default router
