'use strict'

const getFlag = require('../app/flagged')

module.exports.get = async function (ctx) {
  ctx.body = getFlag(ctx.request.query.flag)
}
