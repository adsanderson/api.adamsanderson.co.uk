const test = require('tap').test;
const barcode = require('../../app/barcode');

test('barcode:', t => {
  t.equal(typeof barcode, 'object', 'is an object');
  t.equal(typeof barcode.read, 'function', 'has read function');
  t.end();
});
