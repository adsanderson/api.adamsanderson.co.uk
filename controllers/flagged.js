'use strict';

const getFlag = require("../app/flagged");

module.exports.get = function * () {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, TEST if this gets hit');
  this.body = {
    result: getFlag(this.request.query.flag)
  };
};