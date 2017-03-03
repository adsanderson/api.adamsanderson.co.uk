'use strict'

const getFlag = require('../app/flagged')

module.exports.get = async function () {
  this.body = getFlag(this.request.query.flag)
}
