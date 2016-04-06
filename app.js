'use strict';

const koa = require('koa');
const fleekRouter = require('fleek-router');

const app = koa();
const argv = require('minimist')(process.argv.slice(2));

// const ip = argv.i || '0.0.0.0';
// const port = process.env.PORT || argv.p || '8080';

fleekRouter(app);

app.listen(process.env.PORT);
console.log(`listening on port ${process.env.PORT}`);
