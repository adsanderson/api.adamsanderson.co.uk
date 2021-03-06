'use strict'

const fetch = require('node-fetch')
const response = require('./response')

function pocketGet () {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Accept': 'application/json'
    },
    body: JSON.stringify({
      consumer_key: process.env.CONSUMER_KEY, // eslint-disable-line camelcase
      access_token: process.env.ACCESS_TOKEN, // eslint-disable-line camelcase
      state: 'all',
      tag: 'reading'
    })
  }
  return fetch('https://getpocket.com/v3/get', config)
}

async function fetchReadingList () {
  console.log('fetching pocket articles tagged "reading"')

  const posts = await pocketGet()
  const result = await response(posts)

  return result
}

module.exports = fetchReadingList
