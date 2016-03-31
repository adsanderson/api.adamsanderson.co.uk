'use strict';

const interesting = require("../app/interesting");


module.exports.get = function * () {
    let posts = yield interesting.read(this);
    console.log(posts);
    this.body = {
        message : 'interesting retrieved!'
    };
}

module.exports.post = function * () {
    yield interesting.create(this);
  this.body = {
    message : 'interesting retrieved'
  }
}