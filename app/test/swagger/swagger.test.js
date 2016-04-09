'use strict';

const test = require('tap').test;
var spec = require('swagger-tools').specs.v2;
const api = require('../../../swagger');

test('validate swagger', t => {
  spec.validate(api, function(err, result) {
    if (err) {
      throw err;
    }

    if (typeof result !== 'undefined') {
      if (result.errors.length > 0) {
        console.log('The Swagger document is invalid...');

        console.log('');

        console.log('Errors');
        console.log('------');

        result.errors.forEach(function(err) {
          console.log('#/' + err.path.join('/') + ': ' + err.message);
        });

        console.log('');
      }

      if (result.warnings.length > 0) {
        console.log('Warnings');
        console.log('--------');

        result.warnings.forEach(function(warn) {
          console.log('#/' + warn.path.join('/') + ': ' + warn.message);
        });
      }
      // if (result.errors.length > 0) {
      //   process.exit(1);
      // }
    }

    t.notOk(result, 'swagger validator returned error/warning results');
    t.end();
  });
});
