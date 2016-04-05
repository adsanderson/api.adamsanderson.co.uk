'use strict';

function returnGroup (article) {
    const articleTimestampSeconds = article.time_updated || article.time_added;
    const articleTimestamp = articleTimestampSeconds * 1000;
    const articleDate = new Date(articleTimestamp);
    return articleDate.toISOString().substr(0, 7);
}

module.exports = returnGroup;