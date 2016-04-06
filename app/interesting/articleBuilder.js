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

function addTitle() {

}

module.exports = function articlesBuilder(articles) {
  const initalGroupedArticles = {
      latest: {},
      months: {}
    };

  const groupedArticles = Object.keys(articles).reduce((grouped, articleKey) => {
      const months = Object.assign({}, grouped.months);
      const article = articles[articleKey];
      const articleGroup = articleGrouper(article);

      const markdown = markdownCreator(article);

      if (!months[articleGroup]) {
          console.log(createTitle('test', '2016-04-01T00:00:00'));
        }

      months[articleGroup] = [markdown].concat([months[articleGroup]]).join('\n\n');

      return {
          months: months
        };
    }, initalGroupedArticles);

  return groupedArticles.months;
};