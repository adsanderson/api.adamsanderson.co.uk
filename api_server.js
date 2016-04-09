'use strict';

const koa = require('koa');
const fleekRouter = require('fleek-router');
const api = require('./swagger');


const app = koa();

fleekRouter(app, {
    swagger: api,
    documentation: {
      swagger: api,
      route: '/'
    }
});

app.listen(process.env.PORT, process.env.IP);
console.log(`listening on port ${process.env.PORT}`);
