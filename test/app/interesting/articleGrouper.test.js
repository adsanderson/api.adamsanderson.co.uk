'use strict'

const test = require('ava').test
const articleGrouper = require('../../../app/interesting/articleGrouper')
/*
  1457167982 // 2016-03-05T08:53:02.823Z
  1459846382 // 2016-04-05T08:53:02.823Z
*/
function createDummyArticle (timeAdded) {
  if (timeAdded) {
    return {
      time_added: 1457167982 // eslint-disable-line camelcase
    }
  }

  return {
    time_added: 1457167982, // eslint-disable-line camelcase
    time_updated: 1459846382 // eslint-disable-line camelcase
  }
}

test('return the key for the group when updated', t => {
  t.plan(1)
  const dummyArticle = createDummyArticle()
  const groupKey = articleGrouper.byMonth(dummyArticle)
  t.is(groupKey, '2016-04')
})

test('return the key for the group when added', t => {
  t.plan(1)
  const dummyArticle = createDummyArticle(true)
  const groupKey = articleGrouper.byMonth(dummyArticle)
  t.is(groupKey, '2016-03')
})

test('return the key for the group when updated', t => {
  t.plan(1)
  const dummyArticle = createDummyArticle()
  const groupKey = articleGrouper.byDay(dummyArticle)
  t.is(groupKey, '2016-04-05')
})

test('return the key for the group when added', t => {
  t.plan(1)
  const dummyArticle = createDummyArticle(true)
  const groupKey = articleGrouper.byDay(dummyArticle)
  t.is(groupKey, '2016-03-05')
})
