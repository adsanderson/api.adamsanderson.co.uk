'use strict'

const test = require('ava').test

const pocket = require('../../../app/pocket')

test('module loads', t => {
  t.plan(1)
  t.truthy(pocket)
})
