'use strict';

const test = require("tap").test;
const proxyquire = require('proxyquire');

const requireStubs = {};
requireStubs['image-data-uri'] = {
  encode: function () {
    return 'dummy response';
  }
};

const dataURIGenerator = proxyquire('../../../app/barcode/data-uri-generator', requireStubs);

test('barcode text generator', t => {
  const bufferDummy = new Buffer('');

  const result = dataURIGenerator(bufferDummy);

  t.equal(result, 'dummy response', 'expect the media type to be png');
  t.end();
});