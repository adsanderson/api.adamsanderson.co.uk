'use strict';

function returnGroup (article) {
    let articleTimestamp = article.time_updated || article.time_added;
    let articleDate = new Date(articleTimestamp);
    return articleDate.toISOString().substr(0, 7);
}

module.exports = returnGroup;