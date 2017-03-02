'use strict'

const test = require('ava').test
const proxyquire = require('proxyquire')

function passing (opt, cb) {
  cb()
}

function failing (opt, cb) {
  cb('fail')
}

const requireStubs = {}
requireStubs['bwip-js'] = {}

const barcodeGenerator = proxyquire('../../../app/barcode/barcode-generator',
  requireStubs)

test('barcode generator: resolve', t => {
  t.plan(1)
  requireStubs['bwip-js'].toBuffer = passing
  return barcodeGenerator()
  .then(() => {
    t.pass('resolved')
    requireStubs['bwip-js'] = {}
  })
})

test('barcode generator: resolve', t => {
  t.plan(1)
  requireStubs['bwip-js'].toBuffer = failing
  return barcodeGenerator()
  .catch(err => {
    t.is(err, 'fail')
    requireStubs['bwip-js'] = {}
  })
})
