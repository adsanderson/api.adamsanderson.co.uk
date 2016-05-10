'use strict';

const test = require('tap').test;
const proxyquire = require('proxyquire');

const pocketDummy = {};
pocketDummy['../pocket'] = () => {
  return;
}
const articleBuilderDummy = {};
articleBuilderDummy['./articleBuilder'] = () => {
  return;
};
const interesting = proxyquire('../../../app/interesting',
  pocketDummy,
  articleBuilderDummy);

test('interesting,', t => {

  let gen = interesting.read();

  gen.next();
  const result = gen.next({
    list: []
  }).value;

  t.ok(result instanceof Promise, 'A promise is returned');
  t.ok(interesting);
  t.ok(interesting.read);
  t.end();
});
