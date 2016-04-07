'use strict';

const koa = require('koa');
const fleekRouter = require('fleek-router');

const app = koa();

fleekRouter(app, {
    documentation: {
      swagger: `${process.cwd()}/api.json`,
      route: '/'
    }
});

app.listen(process.env.PORT, process.env.IP);
console.log(`listening on port ${process.env.PORT}`);
