'use strict';

function returnGroup(article) {
  const articleTimestampSeconds = article.time_updated || article.time_added;
  const articleTimestamp = articleTimestampSeconds * 1000;
  const articleDate = new Date(articleTimestamp);
  return articleDate;
}

function byMonth(article) {
  const articleDate = returnGroup(article);
  return articleDate.toISOString().substr(0, 7);
}

function byDay(article) {
  const articleDate = returnGroup(article);
  return articleDate.toISOString().substr(0, 10);
}

module.exports = {
  byMonth: byMonth,
  byDay: byDay
};
