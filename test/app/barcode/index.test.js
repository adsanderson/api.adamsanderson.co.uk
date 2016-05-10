'use strict';

const test = require('tap').test;
const proxyquire = require('proxyquire');

function textPassThroughDummy(text) {
  return Promise.resolve(text);
}

const stubs = {};
stubs['./barcode-text-generator'] = textPassThroughDummy;
stubs['./barcode-generator'] = textPassThroughDummy;
stubs['./data-uri-generator'] = textPassThroughDummy;

const barcode = proxyquire('../../../app/barcode', stubs);

test('barcode:', t => {
  t.equal(typeof barcode, 'object', 'is an object');
  t.equal(typeof barcode.read, 'function', 'has read function');
  t.end();
});

test('barcode: read', t => {
  let gen = barcode.read();

  gen.next();
  const result = gen.next(['test-test', 'foo-bar']);

  t.ok(result.value instanceof Promise, 'A promise is returned');

  result.value.then(barcodesList => {
    const singleFinalBarcodeKeys = Object.keys(barcodesList[0]);
    t.notEqual(singleFinalBarcodeKeys.indexOf('text'), -1, 'expect `text` property to exist');
    t.notEqual(singleFinalBarcodeKeys.indexOf('barcode'), -1, 'expect `barcode` property to exist');
    t.end();
  });
});
