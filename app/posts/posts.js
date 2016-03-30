'use strict';

const pmongo = require('promised-mongo').compatible();
const parse = require('co-body');

const url = 'mongodb://0.0.0.0:27017/api_adamsandersoncouk';

let db = pmongo(url, ['posts']);

function dbClose () {
  db.close();
}

function shapeData (post) {
    return {
        created: new Date().getTime(),
        post: post
    }
}

function * create () {
    let posts = yield parse(this);

    posts = posts.map(shapeData);

    yield db.posts.save(posts);
 
    console.log(posts);
    this.body = posts;
}

function * read () {
    this.body = yield db.posts.find().toArray();
}

module.exports = {
    create: create,
    read: read
}