'use strict';

const test = require("tap").test;
const articleBuilder = require('../../app/interesting/articleBuilder');
const createArticles = require('../utils/articles.fixture').createArticles;

// const DATES = {
//   "2016-03-05": 1457167988,
//   "2016-04-05": 1459846382,
//   "2016-04-10": 1460278382
// };

// function createArticle(title, url, excerpt, added, updated) {
//   return {
//     resolved_title: title, // eslint-disable-line camelcase
//     resolved_url: url, // eslint-disable-line camelcase
//     excerpt: excerpt,
//     time_added: added, // eslint-disable-line camelcase
//     time_updated: updated // eslint-disable-line camelcase
//   };
// }

// function createArticles() {
//   return [
//     createArticle('test title 1', 'http://example.com', undefined, DATES['2016-03-05'], DATES['2016-03-05']),
//     createArticle('test title 2', 'http://example.com', undefined, DATES['2016-03-05'], DATES['2016-04-05']),
//     createArticle('test title 3', 'http://example.com', 'test', DATES['2016-03-05'], DATES['2016-04-10'])
//   ];
// }

function contains(article, content) {
  return article.indexOf(content);
}

test('articleBuilder: ', t => {
  let articles = articleBuilder(createArticles());
  const numberOfArticles = Object.keys(articles).length;
  const singleArticle = articles['2016-04'];

  const frontMatterHeader = contains(singleArticle, '---');

  t.notEqual(frontMatterHeader, -1, 'expect to contain front matter');

  t.equal(numberOfArticles, 2, 'expect 3 articles to be in two groups');
  t.type(singleArticle, 'string', 'expect the group to be a string');

  t.end();
});
