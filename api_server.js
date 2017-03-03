'use strict'

const Koa = require('koa')
const fleekCtx = require('fleek-context')
const fleekRouter = require('fleek-router')
const api = require('./swagger')

const app = new Koa()

app.use(fleekCtx(api))

let router = new fleekRouter.Router()

app.use(router.controllers(`${__dirname}/controllers`))

app.listen(process.env.PORT, process.env.IP)
console.log(`listening on port ${process.env.IP}:${process.env.PORT}`)
