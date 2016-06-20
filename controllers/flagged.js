'use strict';

const getFlag = require("../app/flagged");

module.exports.get = function * () {
  this.body = {
    result: getFlag(this.request.query.flag)
  };
};