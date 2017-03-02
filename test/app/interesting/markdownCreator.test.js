/*  eslint-disable camelcase */

'use strict'

const test = require('ava').test
const articleBuilder = require('../../../app/interesting/markdownCreator').createMarkdown // eslint-disable-line max-len
const titleBuilder = require('../../../app/interesting/markdownCreator').createTitle // eslint-disable-line max-len
const createH4 = require('../../../app/interesting/markdownCreator').createH4

function createDummyArticle (resolved_title, resolved_url, excerpt) {
  return {
    resolved_title: resolved_title,
    resolved_url: resolved_url,
    excerpt: excerpt
  }
}

test('build articles with just link', t => {
  t.plan(1)
  const resolved_title = 'test title'
  const resolved_url = 'http://example.com'
  let article = createDummyArticle(resolved_title, resolved_url)
  let markdownResult = articleBuilder(article)
  t.not(markdownResult.indexOf(resolved_title), -1)
})

test('build article with excerpt', t => {
  t.plan(1)
  const excerpt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum eget neque in aliquam. Nullam vel consequat enim. Morbi fermentum sapien eu bibendum rhoncus. Nunc ornare pretium aliquet. Duis sagittis leo dictum nulla accumsan interdum.' // eslint-disable-line max-len
  let article = createDummyArticle('article', 'http:example.com', excerpt)
  let markdownResult = articleBuilder(article)
  t.not(markdownResult.indexOf(excerpt), -1)
})

test('escape markdown content from strings', t => {
  t.plan(2)
  let article = createDummyArticle(']test', 'http://stuff.net')
  let markdownResult = articleBuilder(article)
  t.is(markdownResult.indexOf('[]'), -1)
  t.not(markdownResult.indexOf('\\]'), -1)
})

test('build a YAML front matter block', t => {
  t.plan(5)
  const dummyDate = '2016-04-08T00:00:00Z'
  const frontMatter = titleBuilder('test test', dummyDate)

  const containsDashes = frontMatter.indexOf('---')
  const containsTitle = frontMatter.indexOf('test test')
  const containsDate = frontMatter.indexOf(dummyDate)
  const containsTags = frontMatter.indexOf('tags:')
  const containsTagReadingList = frontMatter.indexOf('- Reading list')

  t.not(containsDashes, -1, 'contains heading dashes')
  t.not(containsTitle, -1, 'contains the input title')
  t.not(containsDate, -1, 'contains the date')
  t.not(containsTags, -1, 'contains the tag category')
  t.not(containsTagReadingList, -1, 'contains the reading list tag')
})

test('build a H4 heading', t => {
  t.plan(2)
  const dummyText = 'heading heading'
  const heading4 = createH4(dummyText)

  const headingHashes = heading4.indexOf('####')
  const headingText = heading4.indexOf(dummyText)

  t.not(headingHashes, -1)
  t.not(headingText, -1)
})
