'use strict';

const test = require('tap').test;
const proxyquire = require("proxyquire");

const pocket = require('../../app/pocket');

function promiseStub () {
  return Promise.resolve();
}

const proxyStubs = {};
proxyStubs['fetch'] = promiseStub;
proxyStubs['./response'] = promiseStub;

const pocketProxy = proxyquire('../../app/pocket', proxyStubs);

test('module loads', t => {
  t.ok(pocket);
  t.end();
});

test('module returns a promise', t => {
  t.ok(pocketProxy() instanceof Promise);
  t.end();
});