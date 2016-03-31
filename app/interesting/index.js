'use strict';

const pmongo = require('promised-mongo').compatible();
const parse = require('co-body');

const url = 'mongodb://0.0.0.0:27017/api_adamsandersoncouk';

function shapeData (post) {
    return {
        created: new Date().getTime(),
        post: post
    }
}

function * create (req) {
    let posts = yield parse(req);

    posts = posts.map(shapeData);

    let db = pmongo(url, ['posts']);

    yield db.posts.save(posts).then(db.close);
 
    db.close();
 
    return Promise.resolve();
}

function * read () {
    let db = pmongo(url, ['posts']);
    let posts = yield db.posts.find().toArray();
    db.close();
    return Promise.resolve(posts);
}

module.exports = {
    create: create,
    read: read
}