'use strict';

const app = require('./app');

module.exports = function() {
  const domString = app();
  return domString;
};
