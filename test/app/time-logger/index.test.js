'use strict';

const test = require('ava').test;

const timeLogger = require('../../../app/time-logger');

test('flagged:', t => {
  t.plan(1);
  t.is(typeof timeLogger, 'function', 'is a function');
});
