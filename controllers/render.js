'use strict'

const render = require('../app/render')

module.exports.get = (ctx) => {
  const domString = render()
  ctx.body = {
    message: 'rendered DOM',
    DOMString: domString
  }
}
