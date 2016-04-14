'use strict';

const test = require('tap').test;
const proxyquire = require('proxyquire');
const validate = require('jsonschema').validate;

const appInterestingDummy = {};
appInterestingDummy['../app/interesting'] = {
  read: function() {}
};
const interestingProxy = proxyquire('../../controllers/interesting',
  appInterestingDummy);
const interestingSchema = require('../../schema/interesting');

test('Controller: interesting', t => {
  let gen = interestingProxy.get();

  gen.next();
  gen.next(['test string']);

  const validationResult = validate(interestingProxy.body, interestingSchema);
  const validationErrors = validationResult.errors.length;

  t.equal(validationErrors, 0, 'expect a valid schema to be returned');
  t.end();
});
