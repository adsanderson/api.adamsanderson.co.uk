'use strict';

const test = require('tap').test;
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

  t.equal(validationErrors, 0, 'expect a valid schema to be returned');
  t.equal(requestDummy.body.barcode, bodyResult);
  t.end();
});
