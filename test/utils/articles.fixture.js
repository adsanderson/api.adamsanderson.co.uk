'ues strict';

const DATES = {
  "2016-03-05": 1457167988,
  "2016-04-05": 1459846382,
  "2016-04-10": 1460278382
};

function createArticle(title, url, excerpt, added, updated) {
  return {
    resolved_title: title, // eslint-disable-line camelcase
    resolved_url: url, // eslint-disable-line camelcase
    excerpt: excerpt,
    time_added: added, // eslint-disable-line camelcase
    time_updated: updated // eslint-disable-line camelcase
  };
}

function createArticles() {
  return [
    createArticle('test title 1', 'http://example.com', undefined, DATES['2016-03-05'], DATES['2016-03-05']),
    createArticle('test title 2', 'http://example.com', undefined, DATES['2016-03-05'], DATES['2016-04-05']),
    createArticle('test title 3', 'http://example.com', 'test', DATES['2016-03-05'], DATES['2016-04-10']),
    createArticle('test title 4', 'http://example.com', 'test', DATES['2016-03-05'], DATES['2016-04-10']),
    createArticle('test title 5', 'http://example.com', 'test', DATES['2016-03-05'], DATES['2016-04-10']),
    createArticle('test title 6', 'http://example.com', 'test', DATES['2016-03-05'], DATES['2016-04-10'])
  ];
}

module.exports = {
  createArticle: createArticle,
  createArticles: createArticles,
  DATES: DATES
}