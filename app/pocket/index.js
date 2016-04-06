'use strict';

const fetch = require('node-fetch');
const response = require("./response");
var appConfig = require('../../config.json');

const config = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({
      consumer_key: appConfig.pocket.CONSUMER_KEY,
      access_token: appConfig.pocket.ACCESS_TOKEN,
      tag: "reading"
    })
};

function fetchReadingList() {
  return fetch('https://getpocket.com/v3/get', config)
    .then(response);
}

module.exports = fetchReadingList
