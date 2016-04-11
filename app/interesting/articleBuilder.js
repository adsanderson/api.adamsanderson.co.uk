'use strict';

const articleGrouper = require("./articleGrouper");
const markdownCreator = require("./markdownCreator").createMarkdown;
const createTitle = require("./markdownCreator").createTitle;

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
    const articleGroup = articleGrouper.byMonth(article);

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
