'use strict';

const test = require('ava').test;

const questions = require('../../../app/time-logger/questions');

test('flagged:', t => {
  t.plan(1);
  t.is(typeof questions, 'function', 'is a function');
});
