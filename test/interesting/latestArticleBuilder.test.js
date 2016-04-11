'use strict';

const test = require('tap').test;

const createArticle = require('../utils/articles.fixture').createArticle;

const latestArticleBuilder = require('../../app/interesting/latestArticleBuilder');


test('return a fixed length array of articles', t => {
  const latestArticles = latestArticleBuilder(createArticle(), []);
  t.type(latestArticles, 'Array');
  t.equal(latestArticles.length, 5);
  t.end();
});