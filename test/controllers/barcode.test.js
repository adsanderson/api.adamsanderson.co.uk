'use strict'

const test = require('ava').test
const proxyquire = require('proxyquire')
const validate = require('jsonschema').validate

const bodyResult = [{
  text: '',
  barcode: ''
}]

const appBarcodeDummy = {}
appBarcodeDummy['../app/barcode'] = {
  read: function () {
    return bodyResult
  }
}
const barcodeProxy = proxyquire('../../controllers/barcode',
  appBarcodeDummy)
const barcodeSchema = require('../../schema/barcode')

test('Controller: barcode', async function (t) {
  // t.plan(2)
  const requestDummy = {
    request: {
      query: {}
    }
  }

  await barcodeProxy.get.call(requestDummy)

  const validationResult = validate(requestDummy.body, barcodeSchema)
  const validationErrors = validationResult.errors.length

  t.is(validationErrors, 0, 'expect a valid schema to be returned')
  t.is(requestDummy.body.barcodes, bodyResult)
})
