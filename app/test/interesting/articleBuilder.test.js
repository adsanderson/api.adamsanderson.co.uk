'use strict';

const test = require("tap").test;
const articleBuilder = require('../../interesting/articleBuilder');

const DATES = {
    "2016-03-05": 1457167988,
    "2016-04-05": 1459846382,
    "2016-04-10": 1460278382
}

function createArticle (title, url, excerpt, added, updated) {
    return {
        resolved_title: title,
        resolved_url: url,
        excerpt: excerpt,
        time_added: added,
        time_updated: updated
    }
}

function createArticles () {
    return [
        createArticle('test title', 'http://example.com', undefined, DATES['2016-03-05'], DATES['2016-03-05']),
        createArticle('test title', 'http://example.com', undefined, DATES['2016-03-05'], DATES['2016-04-05']),
        createArticle('test title', 'http://example.com', 'test', DATES['2016-03-05'], DATES['2016-04-10'])
        ];
}

test('articleBuilder: ', (t) => {
    let articles = articleBuilder(createArticles());
    t.equal(Object.keys(articles).length, 2, 'expect 3 articles to be in two groups');
    t.type(articles['2016-04'], 'string', 'expect the group to be a string');
    t.notEqual(articles['2016-04'].substr(0, 3), '\n\n', 'expect the group to be a string');
    t.end();
});



