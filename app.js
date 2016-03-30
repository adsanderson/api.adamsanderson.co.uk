'use strict';

const koa = require('koa');
const route = require('koa-route');

const posts = require('./app/posts/posts');

const app = koa();
const argv = require('minimist')(process.argv.slice(2));

const ip = argv.i || '0.0.0.0';
const port = argv.p || '8080';

// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});


app
  .use(route.get('/interesting', posts.read))
  .use(route.post('/interesting', posts.create));

app.use(function * (){
    this.body = 'Hello World';
});

app.listen(port, ip);
console.log(`listening on port ${port}`);