'use strict';

const createTitle = require("./markdownCreator").createTitle;
const createH4 = require("./markdownCreator").createH4;

function latestArticleBuilder(articlesGroupedByDay) {
  const currentLatestArticles = Object.assign({}, articlesGroupedByDay);
  const dayGroups = Object.keys(currentLatestArticles).sort().reverse();
  
  let articlesLength = 0;
  const titleDate = `${dayGroups[0]}T00:00:00Z`;
  let latestArticles = [createTitle(`Interesting Stuff: the latest`, titleDate)];
  
  dayGroups.some((dayGroup) => {
    articlesLength += currentLatestArticles[dayGroup].length;
    const headingDate = createH4(dayGroup);
    latestArticles = latestArticles.concat(headingDate, currentLatestArticles[dayGroup]);
    return articlesLength >= 5;
  });

  return latestArticles.join('\n\n');
}

module.exports = latestArticleBuilder;
