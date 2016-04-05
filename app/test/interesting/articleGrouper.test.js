'use strict';

const test = require("tap").test;
const articleGrouper = require('../../interesting/articleGrouper');

function createDummyArticle (timeAdded) {
    if (timeAdded) {
        return {
            time_added: 1457167982823 // 2016-03-05T08:53:02.823Z
        };
    }

    return {
        time_added: 1457167982823, // 2016-03-05T08:53:02.823Z
        time_updated: 1459846382823 // 2016-04-05T08:53:02.823Z
    };
    
}

test('return the key for the group when updated', (t) => {
    const dummyArticle = createDummyArticle();
    const groupKey = articleGrouper(dummyArticle);
    t.equal(groupKey, '2016-04');
    t.end(); 
});

test('return the key for the group when added', (t) => {
    const dummyArticle = createDummyArticle(true);
    const groupKey = articleGrouper(dummyArticle);
    t.equal(groupKey, '2016-03');
    t.end(); 
});