module.exports.post = function * () {
  this.body = {
    message : 'user created'
  }
}

module.exports.put = function * () {
  this.body = {
    message : 'user updated'
  }
}

module.exports.get = function * () {
  this.body = {
    message : 'user retrieved'
  }
}