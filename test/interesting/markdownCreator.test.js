/*  eslint-disable camelcase */

'use strict';

const test = require("tap").test;
const articleBuilder = require('../../app/interesting/markdownCreator').createMarkdown; // eslint-disable-line max-len
const titleBuilder = require('../../app/interesting/markdownCreator').createTitle;
const createH4 = require('../../app/interesting/markdownCreator').createH4;

function createDummyArticle(resolved_title, resolved_url, excerpt) {
  return {
    resolved_title: resolved_title,
    resolved_url: resolved_url,
    excerpt: excerpt
  };
}

test('build articles with just link', t => {
  const resolved_title = 'test title';
  const resolved_url = 'http://example.com';
  let article = createDummyArticle(resolved_title, resolved_url);
  let markdownResult = articleBuilder(article);
  t.notEqual(markdownResult.indexOf(resolved_title), -1);
  t.end();
});

test('build article with excerpt', t => {
  const excerpt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum eget neque in aliquam. Nullam vel consequat enim. Morbi fermentum sapien eu bibendum rhoncus. Nunc ornare pretium aliquet. Duis sagittis leo dictum nulla accumsan interdum.'; // eslint-disable-line max-len
  let article = createDummyArticle('article', 'http:example.com', excerpt);
  let markdownResult = articleBuilder(article);
  t.notEqual(markdownResult.indexOf(excerpt), -1);
  t.end();
});

test('escape markdown content from strings', t => {
  let article = createDummyArticle(']test', 'http://stuff.net');
  let markdownResult = articleBuilder(article);
  t.equal(markdownResult.indexOf('[]'), -1);
  t.notEqual(markdownResult.indexOf('\\]'), -1);
  t.end();
});

test('build a YAML front matter block', t => {
  const dummyDate = '2016-04-08T00:00:00Z';
  const frontMatter = titleBuilder('test test', dummyDate);

  const frontMatterContainsDashes = frontMatter.indexOf('---');
  const frontMatterContainsTitle = frontMatter.indexOf('test test');
  const frontMatterContainsDate = frontMatter.indexOf(dummyDate);

  t.notEqual(frontMatterContainsDashes, -1);
  t.notEqual(frontMatterContainsTitle, -1);
  t.notEqual(frontMatterContainsDate, -1);

  t.end();
});

test('build a H4 heading', t => {
  const dummyText = 'heading heading';
  const heading4 = createH4(dummyText);
  
  const headingHashes = heading4.indexOf('####');
  const headingText = heading4.indexOf(dummyText)
  
  t.notEqual(headingHashes, -1);
  t.notEqual(headingText, -1);
  t.end();
});
