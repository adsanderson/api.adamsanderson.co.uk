'use strict'

const render = require('../app/render')

module.exports.get = async function () {
  const domString = render()
  this.body = {
    message: 'rendered DOM',
    DOMString: domString
  }
}
