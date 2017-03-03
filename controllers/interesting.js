'use strict'

const interesting = require('../app/interesting')

module.exports.get = async function () {
  let posts = await interesting.read(this)
  this.body = {
    message: 'interesting retrieved!',
    posts: posts
  }
}
