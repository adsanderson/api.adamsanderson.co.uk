'use strict';

var AWS = require("aws-sdk");

AWS.config.loadFromPath('./config.json');

const parse = require('co-body');
const uuid = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient();

function shapeData (post) {
    return {
        guid: uuid.v4(),
        created: new Date().getTime(),
        post: post
    }
}

function * create (req) {
    let posts = yield parse(req);

    posts = posts.map(shapeData);

    
 
    return Promise.resolve();
}

function readFromDatabase () {
    return new Promise((resolve) => {
        var params = {
            TableName : "dev_api.adamsanderson.co.uk"
        };
        
        docClient.scan(params, function(err, data) {
            if (err) {
                console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            } else {
                console.log("Query succeeded.");
                data.Items.forEach(function(item) {
                    console.log(" -", item);
                });
            }
            resolve();
        });
    });
}

function * read () {
    yield readFromDatabase();
    return Promise.resolve();
}

function * allGroupByMonth () {
    
    return Promise.resolve();
}

function * mostRecentPosts () {
    
    return Promise.resolve();
}

module.exports = {
    create: create,
    read: read,
    archive: {
        read: allGroupByMonth
    },
    article: {
        read: mostRecentPosts
    }
}