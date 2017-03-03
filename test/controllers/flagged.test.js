'use strict'

const test = require('ava').test
// const proxyquire = require('proxyquire');
const validate = require('jsonschema').validate

// const appInterestingDummy = {};
// appInterestingDummy['../app/interesting'] = {
//   read: function() {}
// };
const flaggedController = require('../../controllers/flagged')
const flaggedSchema = require('../../schema/flagged')

test('Controller: interesting', async function (t) {
  t.plan(1)
  const requestDummy = {
    request: {
      query: {}
    }
  }

  await flaggedController.get.call(requestDummy)

  const validationResult = validate(flaggedController.body, flaggedSchema)
  const validationErrors = validationResult.errors.length

  t.is(validationErrors, 0, 'expect a valid schema to be returned')
})
