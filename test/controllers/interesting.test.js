'use strict'

const test = require('ava').test
const proxyquire = require('proxyquire')
const validate = require('jsonschema').validate

const appInterestingDummy = {}
appInterestingDummy['../app/interesting'] = {
  read: function () {}
}
const interestingProxy = proxyquire('../../controllers/interesting',
  appInterestingDummy)
const interestingSchema = require('../../schema/interesting')

test('Controller: interesting', t => {
  t.plan(1)
  let gen = interestingProxy.get()

  gen.next()
  gen.next(['test string'])

  const validationResult = validate(interestingProxy.body, interestingSchema)
  const validationErrors = validationResult.errors.length

  t.is(validationErrors, 0, 'expect a valid schema to be returned')
})
