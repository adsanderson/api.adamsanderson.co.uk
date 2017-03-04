'use strict'

const test = require('ava').test
const proxyquire = require('proxyquire')

function textPassThroughDummy (text) {
  return Promise.resolve(text)
}

const stubs = {}
stubs['./barcode-text-generator'] = textPassThroughDummy
stubs['./barcode-generator'] = textPassThroughDummy
stubs['./data-uri-generator'] = textPassThroughDummy

const barcode = proxyquire('../../../app/barcode', stubs)

test('barcode:', t => {
  t.plan(2)
  t.is(typeof barcode, 'object', 'is an object')
  t.is(typeof barcode.read, 'function', 'has read function')
})

test('barcode: read', (t) => {
  t.plan(2)

  const test = async () => {
    const result = await barcode.read(['test-test', 'foo-bar'])
    const singleFinalBarcodeKeys = Object.keys(result[0])
    t.not(singleFinalBarcodeKeys.indexOf('text'), -1, 'expect `text` property to exist')
    t.not(singleFinalBarcodeKeys.indexOf('barcode'), -1, 'expect `barcode` property to exist')
  }

  test()
})
