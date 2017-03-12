'use strict'

const interesting = require('../app/interesting')

module.exports = {
  get: async function (ctx) {
    let posts = await interesting.read(this)
    console.log('posts', posts)
    ctx.body = {
      message: 'interesting retrieved!',
      posts: posts
    }
  }
}
