'use strict'

const Koa = require('koa')
const fleekCtx = require('fleek-context')
const fleekRouter = require('fleek-router')
const api = require('./swagger')

console.log(fleekRouter)

const app = new Koa()

app.use(fleekCtx(api))

let router = new fleekRouter.Router()
// fleekRouter({ controllers: `${__dirname}/controllers` });

// fleekRouter(app, {
//   swagger: api,
//   documentation: {
//     swagger: api,
//     route: '/'
//   }
// })

app.use(router.controllers(`${__dirname}/controllers`))

app.use(ctx => {
  ctx.body = 'Hello World'
})

app.listen(process.env.PORT, process.env.IP)
console.log(`listening on port ${process.env.IP}:${process.env.PORT}`)
