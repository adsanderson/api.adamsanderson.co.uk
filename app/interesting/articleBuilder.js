'use strict';

const articleGrouper = require("./articleGrouper");
const markdownCreator = require("./markdownCreator").createMarkdown;
const createTitle = require("./markdownCreator").createTitle;

// function createLatestArticleItem (articleTimestamp, markdown) {
//     return {
//         timestamp: articleTimestamp,
//         markdown: markdown
//     };
// }

// function addToLatestArticles (thisItem, latestArticle) {
//     return thisItem.timestamp < latestArticle;
// }

// function updateLatest (latestArticles, markdown, article) {
//     const latest = Object.assign({}, latestArticles);
//     const articleTimestamp = article.time_updated || article.time_added;

//     const thisItem = createLatestArticleItem(articleTimestamp, markdown);
// }

// function addTitle() {

// }

function buildArticle(markdown, currentMonthsArticle) {
  return [markdown].concat([currentMonthsArticle]).join('\n\n');
}

function builder(articles) {
  const initalGroupedArticles = {
    latest: {},
    months: {}
  };
  return Object.keys(articles).reduce((grouped, articleKey) => {
    const months = Object.assign({}, grouped.months);
    const article = articles[articleKey];
    const articleGroup = articleGrouper(article);

    const markdown = markdownCreator(article);

    const currentMonthsArticle = months[articleGroup];

    if (!currentMonthsArticle) {
      console.log(createTitle('test', '2016-04-01T00:00:00'));
    }

    months[articleGroup] = buildArticle(markdown, currentMonthsArticle);

    return {
      months: months
    };
  }, initalGroupedArticles);
}

module.exports = function articlesBuilder(articles) {
  const groupedArticles = builder(articles);
  return groupedArticles.months;
};
