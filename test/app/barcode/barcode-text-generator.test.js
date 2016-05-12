'use strict';

const test = require("tap").test;
const barcodeTextGenerator = require('../../../app/barcode/barcode-text-generator');

test('barcode text generator', t => {
  const requestQSObj = {
    formtype: 'abc',
    formnumber: 1,
    version: 2,
    numberofpages: 5
  };

  const result = barcodeTextGenerator(requestQSObj);

  const firstMetadataString = result[0];

  t.ok(firstMetadataString.includes('S-ABC-'), 'expect form type in uppercase');
  t.ok(firstMetadataString.includes('-001-'), 'expect three digit form number');
  t.ok(firstMetadataString.includes('-02~'), 'expect two digit version');
  t.ok(firstMetadataString.includes('~01~'), 'expect first page');
  t.ok(firstMetadataString.includes('~05'), 'expect five pages total');

  t.equal(result.length, 5, 'expect 5 strings to be returned');
  t.equal(typeof firstMetadataString, 'string', 'expect a string to be returned');
  t.end();
});
