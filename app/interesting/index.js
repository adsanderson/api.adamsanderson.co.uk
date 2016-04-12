'use strict';

var pocket = require("../pocket");
var articleBuilder = require("./articleBuilder");

function * read() {
  let posts = yield pocket();
  return Promise.resolve(articleBuilder(posts.list));
}

module.exports = {
  read: read
};
