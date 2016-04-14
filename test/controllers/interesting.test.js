'use strict';

const test = require('tap').test;
const proxyquire = require('proxyquire');
const validate = require('jsonschema').validate;

const interesting = require('../../controllers/interesting');
const interestingSchema = require('../../schema/interesting');

const appInterestingDummy = {};
appInterestingDummy['../app/interesting'] = {
  read: function () {}
};

var interestingProxy = proxyquire('../../controllers/interesting', appInterestingDummy);

test('confirm module loads', t => {
  t.doesNotThrow(interesting);
  t.end();
});

test('Controller, interesting', t => {

  let gen = interestingProxy.get();

  gen.next();
  gen.next(['test string']);

  const validationErrors = validate(interestingProxy.body, interestingSchema).errors.length;

  t.equal(validationErrors, 0, 'expect a valid schema to be returned');

  t.end();
});