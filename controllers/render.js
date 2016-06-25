'use strict';

const barcode = require("../app/barcode");

module.exports.get = function * () {
  //let barcodes = yield barcode.read(this.request.query);
  this.body = {
    message: 'rendered DOM',
    DOMString: ''
  };
};
