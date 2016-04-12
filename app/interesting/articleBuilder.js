'use strict';

const articleGrouper = require("./articleGrouper");
const markdownCreator = require("./markdownCreator").createMarkdown;
const createTitle = require("./markdownCreator").createTitle;
const latestArticleBuilder = require('./latestArticleBuilder');

function buildArticle(markdown, currentMonthsArticle) {
  return [currentMonthsArticle].concat([markdown]).join('\n\n');
}

function returnBuiltDays (article, grouped, markdown) {
  const days = Object.assign({}, grouped.days);
  const articleDayGroup = articleGrouper.byDay(article);
  
  if(!days[articleDayGroup]) {
    days[articleDayGroup] = [];
  } 
  
  days[articleDayGroup] = days[articleDayGroup].concat(markdown);
  
  return days;
}

function returnBuiltMonth (article, grouped, markdown) {
  const months = Object.assign({}, grouped.months);
  const articleGroup = articleGrouper.byMonth(article);
  
  let currentMonthsArticle = months[articleGroup];

  if (!currentMonthsArticle) {
    const titleDate = `${articleGroup}-01T00:00:00Z`;
    currentMonthsArticle = createTitle(`Interesting Stuff`, titleDate);
  }
  
  months[articleGroup] = buildArticle(markdown, currentMonthsArticle);
  
  return months;
}

function builder(articles) {
  const initalGroupedArticles = {
    latest: {},
    months: {}
  };
  return Object.keys(articles).reduce((grouped, articleKey) => {
    const article = articles[articleKey];
    const markdown = markdownCreator(article);

    const months = returnBuiltMonth(article, grouped, markdown);
    const days = returnBuiltDays(article, grouped, markdown);

    return {
      months: months,
      days: days
    };
  }, initalGroupedArticles);
}

module.exports = function articlesBuilder(articles) {
  const groupedArticles = builder(articles);
  
  const latestArticle = {
    latest: latestArticleBuilder(groupedArticles.days)
  };
  
  return Object.assign({}, latestArticle, groupedArticles.months);
};
