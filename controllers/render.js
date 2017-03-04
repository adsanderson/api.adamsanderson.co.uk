'use strict'

const render = require('../app/render')

module.exports.get = async () => {
  const domString = render()
  this.body = {
    message: 'rendered DOM',
    DOMString: domString
  }
}
