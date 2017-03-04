'use strict'

const render = require('../app/render')

async function get () {
  const domString = render()
  this.body = {
    message: 'rendered DOM',
    DOMString: domString
  }
}

module.exports.get = get
