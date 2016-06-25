'use strict';

// const render = require("../app/render");

module.exports.get = function * () {
  // let barcodes = yield barcode.read(this.request.query);
  this.body = {
    message: 'rendered DOM',
    DOMString: ''
  };
};
