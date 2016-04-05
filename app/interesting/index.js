'use strict';

var pocket = require("../pocket");
var articleBuilder = require("./articleBuilder");

function * create (req) {

    return Promise.resolve();
}


function * read () {
    let posts = yield pocket();
    posts
    return Promise.resolve(posts);
}

function * allGroupByMonth () {
    
    return Promise.resolve();
}

function * mostRecentPosts () {
    
    return Promise.resolve();
}

module.exports = {
    create: create,
    read: read,
    archive: {
        read: allGroupByMonth
    },
    article: {
        read: mostRecentPosts
    }
}