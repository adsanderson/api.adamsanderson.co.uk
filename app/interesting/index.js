'use strict';

var pocket = require("../pocket");
var articleBuilder = require("./articleBuilder");

function * read() {
  const posts = yield pocket();
  const response = {
    latest: articleBuilder(posts.list).latest
  };
  return Promise.resolve(response);
}

module.exports = {
  read: read
};
