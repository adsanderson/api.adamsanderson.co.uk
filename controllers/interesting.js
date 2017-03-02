'use strict'

const interesting = require('../app/interesting')

module.exports.get = function * () {
  let posts = yield interesting.read(this)
  this.body = {
    message: 'interesting retrieved!',
    posts: posts
  }
}
