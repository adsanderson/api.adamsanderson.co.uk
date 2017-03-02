'use strict'

const test = require('ava').test

const render = require('../../../app/render')

test('flagged:', t => {
  t.plan(2)
  t.is(typeof render, 'function', 'is a function')
  t.is(typeof render(), 'string', 'expect a string to be returned')
})
