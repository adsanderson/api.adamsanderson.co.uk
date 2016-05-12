'use strict';

// const interesting = require("../app/facebookbot");

module.exports.get = function * (next) {
  console.log('///////////', this.request.query['hub.verify_token'], process.env.VERIFY_TOKEN);

  this.body = 'Error, wrong validation token';

  if (this.request.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
    this.body = this.request.query['hub.challenge'];
  }
};
