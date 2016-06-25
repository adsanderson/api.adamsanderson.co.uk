'use strict';

const test = require('tap').test;

const render = require('../../../app/render');

test('flagged:', t => {
  t.equal(typeof render, 'function', 'is a function');

  t.equal(typeof render(), 'string', 'expect a string to be returned');

  t.end();
});
