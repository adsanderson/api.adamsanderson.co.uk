'use strict'

const test = require('ava').test
var response = require('../../../app/pocket/response')

test('error is thrown with a 400+ response', t => {
  t.plan(1)
  const res = {
    status: 401
  }

  t.throws(function () {
    response(res)
  })
})

test('error is not thrown with a 400+ response', t => {
  t.plan(2)
  const res = {
    status: 200,
    json: function () {
      return true
    }
  }

  t.notThrows(() => {
    response(res)
  })
  t.is(response(res), true)
})
