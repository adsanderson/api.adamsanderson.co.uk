'use strict'

const test = require('ava').test

const timeLogger = require('./index')

test('flagged:', t => {
  t.equal(typeof timeLogger, 'function', 'is a function')
  t.equal(typeof timeLogger(), 'string', 'expect a string to be returned')
  t.end()
})
