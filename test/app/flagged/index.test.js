'use strict'

const test = require('ava').test

const flagged = require('../../../app/flagged')

test('flagged:', t => {
  t.plan(5)
  t.is(typeof flagged, 'function', 'is a function')

  const flagResult = flagged()

  t.falsy(flagResult, 'expect default as false')

  t.falsy(flagged('falsey'), 'expect a false flag to return false')
  t.falsy(flagged('isUndefined'), 'expect an undefined value to return false')
  t.truthy(flagged('truthy'), 'expect a true flag to return true')
})
