'use strict';

// const interesting = require("../app/facebookbot");

module.exports.get = function * () {
  if (this.request.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
    this.body = this.request.query['hub.challenge'];
  }
  this.body = 'Error, wrong validation token';
};
