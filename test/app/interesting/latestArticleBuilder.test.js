'use strict'

const test = require('ava').test
const latestArticleBuilder = require('../../../app/interesting/latestArticleBuilder') // eslint-disable-line max-len

const groupedArticles = {}
groupedArticles['2016-04-10'] = ['### test 1', '### test 2', '### test 3', '### test 4'] // eslint-disable-line max-len
groupedArticles['2016-04-05'] = ['### test 5', '### test 6']
groupedArticles['2016-03-05'] = ['### test 7', '### test 8']

test('return a fixed length array of articles', t => {
  t.plan(7)
  const latestArticle = latestArticleBuilder(groupedArticles)

  const numberOfHeadings = (latestArticle.match(/\n###\s/g) || []).length
  const numberOfDates = (latestArticle.match(/\n####\s/g) || []).length
  const numberOfNewlines = (latestArticle.match(/\n\n/g) || []).length
  const inArticle1st = (latestArticle.match(/test 1/g) || []).length
  const inArticle2nd = (latestArticle.match(/test 5/g) || []).length
  const notInArticle = (latestArticle.match(/test 7/g) || []).length

  t.is(typeof latestArticle, 'string')
  t.is(numberOfHeadings, 6, 'expect 6 heading to be included')
  t.is(numberOfDates, 2, 'expect 2 heading dates')
  t.is(numberOfNewlines, 8, 'expect 8 new lines')
  t.is(inArticle1st, 1, 'expect 1 instance of `test 1`')
  t.is(inArticle2nd, 1, 'expect 1 instance of `test 5`')
  t.is(notInArticle, 0, 'expect test 7 not be included in the article')
})
