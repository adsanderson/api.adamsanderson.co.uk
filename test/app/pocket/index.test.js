'use strict';

const test = require('ava').test;
const proxyquire = require("proxyquire");

const pocket = require('../../../app/pocket');

function promiseStub() {
  return Promise.resolve();
}

const proxyStubs = {
  fetch: promiseStub
};
proxyStubs['./response'] = promiseStub;

test('module loads', t => {
  t.plan(1);
  t.truthy(pocket);
});
