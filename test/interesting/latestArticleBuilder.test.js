'use strict';

const test = require('tap').test;

const articles = require('../utils/articles.fixture');
const latestArticleBuilder = require('../../app/interesting/latestArticleBuilder');

const groupedArticles = {};

groupedArticles["2016-04-10"] = ['### test 1', '### test 2', '### test 3', '### test 4'];
groupedArticles["2016-04-05"] = ['### test 5', '### test 6'];
groupedArticles[ "2016-03-05"] = ['### test 7', '### test 8'];

test('return a fixed length array of articles', t => {
  const latestArticle = latestArticleBuilder(groupedArticles);
  
  const numberOfHeadings = (latestArticle.match(/\n###\s/g) || []).length;
  const numberOfDates = (latestArticle.match(/\n####\s/g) || []).length;
  const numberOfNewlines = (latestArticle.match(/\n\n/g) || []).length;
  const inArticle1st = (latestArticle.match(/test 1/g) || []).length;
  const inArticle2nd = (latestArticle.match(/test 5/g) || []).length;
  const notInArticle = (latestArticle.match(/test 7/g) || []).length;
  
  t.type(latestArticle, 'string');
  t.equal(numberOfHeadings, 6, 'expect 6 heading to be included');
  t.equal(numberOfDates, 2, 'expect 2 heading dates');
  t.equal(numberOfNewlines, 8, 'expect 8 new lines');
  t.equal(inArticle1st, 1, 'expect 1 instance of `test 1`');
  t.equal(inArticle2nd, 1, 'expect 1 instance of `test 5`');
  t.equal(notInArticle, 0, 'expect test 7 to not be included in the article');
  
  t.end();
});