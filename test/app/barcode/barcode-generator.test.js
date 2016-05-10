'use strict';

const test = require("tap").test;
const proxyquire = require('proxyquire');


function passing (opt, cb) {
  cb();
}

function failing (opt, cb) {
  cb('fail');
}

const requireStubs = {};
requireStubs['bwip-js'] = {};

const barcodeGenerator = proxyquire('../../../app/barcode/barcode-generator', requireStubs);

test('barcode text generator: resolve', t => {
  requireStubs['bwip-js'].toBuffer = passing;
  barcodeGenerator()
  .then(() => {
    t.end();
    requireStubs['bwip-js'] = {};
  });
});

test('barcode text generator: resolve', t => {
  requireStubs['bwip-js'].toBuffer = failing;
  barcodeGenerator()
  .catch(err => {
    t.equal(err, 'fail');
    t.end();
    requireStubs['bwip-js']= {};
  });
});
