'use strict';

const test = require('ava').test;
const proxyquire = require('proxyquire');
const validate = require('jsonschema').validate;

const appBarcodeDummy = {};
appBarcodeDummy['../app/barcode'] = {
  read: function() {}
};
const barcodeProxy = proxyquire('../../controllers/barcode',
  appBarcodeDummy);
const barcodeSchema = require('../../schema/barcode');

test('Controller: barcode', t => {
  t.plan(2);
  const requestDummy = {
    request: {
      query: {}
    }
  };

  const bodyResult = [{
    text: '',
    barcode: ''
  }];

  let gen = barcodeProxy.get.call(requestDummy);

  gen.next();
  gen.next(bodyResult);

  const validationResult = validate(requestDummy.body, barcodeSchema);
  const validationErrors = validationResult.errors.length;

  t.is(validationErrors, 0, 'expect a valid schema to be returned');
  t.is(requestDummy.body.barcodes, bodyResult);
});
