# koa-sample

## Links

### [koa](https://github.com/koajs/koa)

- [site](https://koajs.com/)

### [@koa/router](https://github.com/koajs/router)

- [API](https://github.com/koajs/router/blob/master/API.md#module_koa-router--Router+allowedMethods)

### [koa-bodyparser](https://github.com/koajs/bodyparser)

### [@koa/cors](https://github.com/koajs/cors)

```
/**
 * CORS middleware
 *
 * @param {Object} [options]
 *  - {String|Function(ctx)} origin `Access-Control-Allow-Origin`, default is request Origin header
 *  - {String|Array} allowMethods `Access-Control-Allow-Methods`, default is 'GET,HEAD,PUT,POST,DELETE,PATCH'
 *  - {String|Array} exposeHeaders `Access-Control-Expose-Headers`
 *  - {String|Array} allowHeaders `Access-Control-Allow-Headers`
 *  - {String|Number} maxAge `Access-Control-Max-Age` in seconds
 *  - {Boolean|Function(ctx)} credentials `Access-Control-Allow-Credentials`, default is false.
 *  - {Boolean} keepHeadersOnError Add set headers to `err.header` if an error is thrown
 * @return {Function} cors middleware
 * @api public
 */
```
