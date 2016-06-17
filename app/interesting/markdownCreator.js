'use strict';

const remark = require('remark')();

function escapeTitle(title, date) {
  return remark.stringify({
    type: "yaml",
    value: `title: ${title}
date: ${date}
tags:
- Reading list`
  });
}

function escapeLinkMd(text, link) {
  return remark.stringify({
    type: "paragraph",
    children: [{
      type: "link",
      title: null,
      url: link,
      children: [{
        type: "text",
        value: text
      }]
    }]
  });
}

function escapeQuoteMd(text) {
  return remark.stringify({
    type: "blockquote",
    children: [{
      type: "paragraph",
      children: [{
        type: "text",
        value: text
      }]
    }]
  });
}

function createH4(text) {
  return remark.stringify({
    type: "heading",
    depth: 4,
    children: [{
      type: "text",
      value: text
    }]
  });
}

function createLink(article) {
  return escapeLinkMd(article.resolved_title, article.resolved_url);
}

function creatExcerpt(article) {
  if (article.excerpt) {
    return escapeQuoteMd(article.excerpt);
  }
}

function combineMarkdown(link, excerpt) {
  let markdown = [link];

  if (excerpt) {
    markdown.push(excerpt);
  }

  return markdown.join('\n\n');
}

function createMarkdown(article) {
  let link = createLink(article);
  let excerpt = creatExcerpt(article);

  return combineMarkdown(link, excerpt);
}

module.exports = {
  createMarkdown: createMarkdown,
  createTitle: escapeTitle,
  createH4: createH4
};
