'use strict';

const getFlag = require("../app/flagged");

module.exports.get = function * () {
  this.body = getFlag(this.request.query.flag);
};
