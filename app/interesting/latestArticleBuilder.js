'use strict';

function latestArticleBuilder(article, latestArticles) {
  const currentLatestArticles = [].concat(latestArticles);
  currentLatestArticles.length = 5;
  return currentLatestArticles;
}

module.exports = latestArticleBuilder;
