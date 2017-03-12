'use strict'

const test = require('ava').test
const proxyquire = require('proxyquire')
const validate = require('jsonschema').validate

const appInterestingDummy = {}
appInterestingDummy['../app/interesting'] = {
  read: function () {
    return ['test string']
  }
}
const interestingProxy = proxyquire('../../controllers/interesting',
  appInterestingDummy)
const interestingSchema = require('../../schema/interesting')

test('Controller: interesting', async function (t) {
  t.plan(1)
  await interestingProxy.get({request: {}})

  const validationResult = validate(interestingProxy.body, interestingSchema)
  const validationErrors = validationResult.errors.length

  t.is(validationErrors, 0, 'expect a valid schema to be returned')
})
