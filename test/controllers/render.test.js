'use strict';

const test = require('tap').test;
// const proxyquire = require('proxyquire');
const validate = require('jsonschema').validate;

// const appBarcodeDummy = {};
// appBarcodeDummy['../app/barcode'] = {
//   read: function() {}
// };
// const barcodeProxy = proxyquire('../../controllers/barcode',
  // appBarcodeDummy);
const render = require('../../controllers/render');
const renderSchema = require('../../schema/render');

test('Controller: render', t => {
  const requestDummy = {
    request: {
      query: {}
    }
  };

  let gen = render.get.call(requestDummy);

  gen.next();

  const validationResult = validate(requestDummy.body, renderSchema);
  const validationErrors = validationResult.errors.length;

  t.equal(validationErrors, 0, 'expect a valid schema to be returned');
  t.end();
});
