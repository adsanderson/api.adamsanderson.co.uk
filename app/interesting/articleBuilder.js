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

function buildArticle(markdown, currentMonthsArticle) {
  return [currentMonthsArticle].concat([markdown]).join('\n\n');
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

    let currentMonthsArticle = months[articleGroup];

    if (!currentMonthsArticle) {
      const titleDate = `${articleGroup}-01T00:00:00Z`;
      currentMonthsArticle = createTitle(`Interesting Stuff`, titleDate);
    }

    months[articleGroup] = buildArticle(markdown, currentMonthsArticle);

    console.log(months[articleGroup]);

    return {
      months: months
    };
  }, initalGroupedArticles);
}

module.exports = function articlesBuilder(articles) {
  const groupedArticles = builder(articles);
  // console.log(groupedArticles.months);
  return groupedArticles.months;
};
