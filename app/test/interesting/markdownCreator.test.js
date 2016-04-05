'use strict';

const test = require("tap").test;
const articleBuilder = require('../../interesting/markdownCreator');

function createDummyArticle(resolved_title, resolved_url, excerpt) {
    return {
        resolved_title: resolved_title,
        resolved_url: resolved_url,
        excerpt: excerpt
    }
}

function createDummyArticles(article) {
    let articles = [{
        resolved_title: 'test title',
        resolved_url: 'http://example.com'
    }, {
        resolved_title: 'test title 2',
        resolved_url: 'http://example.com'
    }];
    if (article) articles.push(article);
    return articles;
}

test('build articles with just link', (t) => {
    const resolved_title = 'test title';
    const resolved_url = 'http://example.com';
    let article = createDummyArticle(resolved_title, resolved_url);
    let markdownResult = articleBuilder(article);
    t.notEqual(markdownResult.indexOf(resolved_title), -1);
    t.end();
});

test('build article with excerpt', (t) => {
    const excerpt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum eget neque in aliquam. Nullam vel consequat enim. Morbi fermentum sapien eu bibendum rhoncus. Nunc ornare pretium aliquet. Duis sagittis leo dictum nulla accumsan interdum.';
    let article = createDummyArticle('article', 'http:example.com', excerpt);
    let markdownResult = articleBuilder(article);
    t.notEqual(markdownResult.indexOf(excerpt), -1);
    t.end();
});

test('escape markdown content from strings', (t) => {
    let article = createDummyArticle(']test', 'http://stuff.net');
    let markdownResult = articleBuilder(article);
    t.equal(markdownResult.indexOf('[]'), -1);
    t.notEqual(markdownResult.indexOf('\\]'), -1);
    t.end(); 
});

