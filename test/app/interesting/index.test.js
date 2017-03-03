'use strict'

const test = require('ava').test
const proxyquire = require('proxyquire')

const pocketDummy = {}
pocketDummy['../pocket'] = function () {
  return {
    list: []
  }
}
const articleBuilderDummy = {}
articleBuilderDummy['./articleBuilder'] = () => {

}
const interesting = proxyquire('../../../app/interesting',
  pocketDummy,
  articleBuilderDummy)

test('interesting,', async function (t) {
  t.plan(2)

  await interesting.read()

  t.truthy(interesting)
  t.truthy(interesting.read)
})
