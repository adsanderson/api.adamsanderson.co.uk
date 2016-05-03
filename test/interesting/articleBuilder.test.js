'use strict';

const test = require("tap").test;
const articleBuilder = require('../../app/interesting/articleBuilder');
const createArticles = require('../utils/articles.fixture').createArticles;

function contains(article, content) {
  return article.indexOf(content);
}

test('articleBuilder: ', t => {
  let articles = articleBuilder(createArticles());
  const numberOfArticles = Object.keys(articles).length;
  const singleArticleWithExcerpt = articles['2016-04'];
  const singleArticle = articles['2016-03'];

  console.log(singleArticleWithExcerpt);

  const frontMatterHeader = contains(singleArticle, '---');
  const doesNotContainExcerpt = contains(singleArticle, '<!-- more -->');
  const containsExcerpt = contains(singleArticleWithExcerpt, '<!-- more -->');

  t.notEqual(frontMatterHeader, -1, 'expect to contain front matter');

  t.equal(numberOfArticles, 3, 'expect *2* groups and latest');
  t.type(singleArticle, 'string', 'expect the group to be a string');
  t.equal(doesNotContainExcerpt, -1, 'expect to contain excerpt break');
  t.notEqual(containsExcerpt, -1, 'expect to contain excerpt break');
  t.ok(articles.latest);
  t.type(articles.latest, 'string');

  t.end();
});
