'use strict';

const createTitle = require("./markdownCreator").createTitle;
const createH4 = require("./markdownCreator").createH4;

function latestArticleBuilder(articlesGroupedByDay) {
  const currentLatestArticles = Object.assign({}, articlesGroupedByDay);
  const dayGroups = Object.keys(currentLatestArticles).sort().reverse();

  let articlesLength = 0;
  const titleDate = `${dayGroups[0]}T00:00:00Z`;
  const title = createTitle(`The latest interesting stuff`, titleDate);
  let latestArticles = [title];

  dayGroups.some(dayGroup => {
    const articleGroup = currentLatestArticles[dayGroup];
    articlesLength += articleGroup.length;
    const headingDate = createH4(dayGroup);
    latestArticles = latestArticles.concat(headingDate, articleGroup);
    return articlesLength >= 5;
  });

  return latestArticles.join('\n\n');
}

module.exports = latestArticleBuilder;
