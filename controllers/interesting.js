'use strict';

const interesting = require("../app/interesting");


module.exports.get = function * () {
    let posts = yield interesting.read(this);
    this.body = {
        message : 'interesting retrieved!',
        posts: posts
    };
}

module.exports.post = function * () {
    yield interesting.create(this);
  this.body = {
    message : 'interesting retrieved'
  }
}

let archive = {
    get: function * () {
        let posts = yield interesting.archive.read(this);
        console.log(posts);
        this.body = {
            message : 'interesting retrieved!',
            posts: posts
        };  
    }
}

let article = {
    get: function * () {
        let posts = yield interesting.article.read(this);
        console.log(posts);
        this.body = {
            message : 'interesting post!',
            posts: posts
        };  
    }
}

module.exports.archive = archive;
module.exports.article = article;