'use strict';

const test = require('ava').test;
const proxyquire = require('proxyquire');

const requireStubs = {};
requireStubs['image-data-uri'] = {
  encode: function() {
    return 'dummy response';
  }
};

const dataURIGenerator = proxyquire('../../../app/barcode/data-uri-generator', requireStubs);

test('data-uri generator', t => {
  t.plan(1);
  const bufferDummy = new Buffer('');

  const result = dataURIGenerator(bufferDummy);

  t.is(result, 'dummy response', 'expect the media type to be png');
});
