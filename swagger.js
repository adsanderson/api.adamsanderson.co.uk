'use strict';

const interestingSchema = require('./schema/interesting');
const internalErrorSchema = require('./schema/errors/internal');

const header = {
  swagger: "2.0",
  info: {
    title: "api.adamsanderson.co.uk",
    description: "API for adamsanderson.co.uk",
    version: "0.0.1"
  },
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"]
};

const paths = {
  paths: {}
};

paths.paths["/interesting"] = {
  get: {
    description: "Return a list of interesting articles",
    tags: ["interesting"],
    responses: {
      200: {
        description: "A list of interesting articles is returned",
        schema: interestingSchema
      },
      default: {
        description: "unexpected error",
        schema: internalErrorSchema
      }
    }
  }
};

const api = Object.assign({}, header, paths);

module.exports = api;
