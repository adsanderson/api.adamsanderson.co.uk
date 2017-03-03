'use strict'

var pocket = require('../pocket')
var articleBuilder = require('./articleBuilder')

async function read () {
  const posts = await pocket()
  const response = {
    latest: articleBuilder(posts.list).latest
  }
  return Promise.resolve(response)
}

module.exports = {
  read: read
}
