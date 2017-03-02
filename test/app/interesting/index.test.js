'use strict'

const test = require('ava').test
const proxyquire = require('proxyquire')

const pocketDummy = {}
pocketDummy['../pocket'] = () => {

}
const articleBuilderDummy = {}
articleBuilderDummy['./articleBuilder'] = () => {

}
const interesting = proxyquire('../../../app/interesting',
  pocketDummy,
  articleBuilderDummy)

test('interesting,', t => {
  t.plan(2)
  let gen = interesting.read()

  gen.next()
  gen.next({
    list: []
  })

  t.truthy(interesting)
  t.truthy(interesting.read)
})
