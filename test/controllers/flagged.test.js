'use strict';

const test = require('tap').test;
// const proxyquire = require('proxyquire');
const validate = require('jsonschema').validate;

// const appInterestingDummy = {};
// appInterestingDummy['../app/interesting'] = {
//   read: function() {}
// };
const flaggedController = require('../../controllers/flagged');
const flaggedSchema = require('../../schema/flagged');

test('Controller: interesting', t => {
  const requestDummy = {
    request: {
      query: {}
    }
  };

  let gen = flaggedController.get.call(requestDummy);

  gen.next();

  const validationResult = validate(flaggedController.body, flaggedSchema);
  const validationErrors = validationResult.errors.length;

  t.equal(validationErrors, 0, 'expect a valid schema to be returned');
  t.end();
});
