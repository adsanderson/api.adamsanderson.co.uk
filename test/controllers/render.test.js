'use strict'

const test = require('ava').test
const validate = require('jsonschema').validate

const render = require('../../controllers/render')
const renderSchema = require('../../schema/render')

test('Controller: render', async function (t) {
  t.plan(1)
  const requestDummy = {
    request: {
      query: {}
    }
  }

  await render.get.call(requestDummy)

  const validationResult = validate(requestDummy.body, renderSchema)
  const validationErrors = validationResult.errors.length

  t.is(validationErrors, 0, 'expect a valid schema to be returned')
})
