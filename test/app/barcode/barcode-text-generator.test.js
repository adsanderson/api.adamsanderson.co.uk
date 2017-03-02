'use strict'

const test = require('ava').test
const barcodeTextGenerator = require('../../../app/barcode/barcode-text-generator')

test('barcode text generator', t => {
  t.plan(7)
  const requestQSObj = {
    formtype: 'abc',
    formnumber: 1,
    version: 2,
    numberofpages: 5
  }

  const result = barcodeTextGenerator(requestQSObj)

  const firstMetadataString = result[0]

  t.true(firstMetadataString.includes('S-ABC-'), 'expect form type in uppercase')
  t.true(firstMetadataString.includes('-001-'), 'expect three digit form number')
  t.true(firstMetadataString.includes('-02~'), 'expect two digit version')
  t.true(firstMetadataString.includes('~01~'), 'expect first page')
  t.true(firstMetadataString.includes('~05'), 'expect five pages total')

  t.is(result.length, 5, 'expect 5 strings to be returned')
  t.is(typeof firstMetadataString, 'string', 'expect a string to be returned')
})
