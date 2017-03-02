'use strict'

const test = require('ava').test
const articleBuilder = require('../../../app/interesting/articleBuilder')
const createArticles = require('../../utils/articles.fixture').createArticles

function contains (article, content) {
  return article.indexOf(content)
}

test('articleBuilder: ', t => {
  t.plan(7)
  let articles = articleBuilder(createArticles())
  const numberOfArticles = Object.keys(articles).length
  const singleArticleWithExcerpt = articles['2016-04']
  const singleArticle = articles['2016-03']

  console.log(singleArticleWithExcerpt)

  const frontMatterHeader = contains(singleArticle, '---')
  const doesNotContainExcerpt = contains(singleArticle, '<!-- more -->')
  const containsExcerpt = contains(singleArticleWithExcerpt, '<!-- more -->')

  t.not(frontMatterHeader, -1, 'expect to contain front matter')

  t.is(numberOfArticles, 3, 'expect *2* groups and latest')
  t.is(typeof singleArticle, 'string', 'expect the group to be a string')
  t.is(doesNotContainExcerpt, -1, 'expect to contain excerpt break')
  t.not(containsExcerpt, -1, 'expect to contain excerpt break')
  t.truthy(articles.latest)
  t.is(typeof articles.latest, 'string')
})
