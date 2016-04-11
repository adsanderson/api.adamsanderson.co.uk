'use strict';

const test = require('tap').test;
const pocket = require('../../app/pocket');

test('module loads', t => {
  t.ok(pocket);
  t.end();
});