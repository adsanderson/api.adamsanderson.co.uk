'use strict';

const test = require('tap').test;

const flagged = require('../../../app/flagged');

test('flagged:', t => {
  t.equal(typeof flagged, 'function', 'is a function');

  const flagResult = flagged();

  t.notOk(flagResult, 'expect default as false');

  t.notOk(flagged('falsey'), 'expect a false flag to return false');
  t.notOk(flagged('isUndefined'), 'expect an undefined value to return false');
  t.ok(flagged('truthy'), 'expect a true flag to return true');

  t.end();
});
