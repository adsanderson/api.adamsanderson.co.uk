'use strict';

const test = require("tap").test;
var response = require("../../../app/pocket/response");

test('error is thrown with a 400+ response', t => {
  const res = {
    status: 401
  };

  t.throws(function() {
    response(res);
  });
  t.end();
});

test('error is not thrown with a 400+ response', t => {
  const res = {
    status: 200,
    json: function() {
      return true;
    }
  };

  t.doesNotThrow(() => {
    response(res);
  });
  t.equal(response(res), true);
  t.end();
});
