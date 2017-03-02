'use strict'

const interestingSchema = require('./schema/interesting')
const barcodeSchema = require('./schema/barcode')
const internalErrorSchema = require('./schema/errors/internal')
const flaggedSchema = require('./schema/flagged')
const flagged = require('./app/flagged')

const header = {
  swagger: '2.0',
  info: {
    title: 'api.adamsanderson.co.uk',
    description: 'API for adamsanderson.co.uk',
    version: '0.0.1'
  },
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json']
}

const paths = {
  paths: {}
}

paths.paths['/interesting'] = {
  get: {
    description: 'Return a list of interesting articles',
    tags: ['interesting'],
    responses: {
      200: {
        description: 'A list of interesting articles is returned',
        schema: interestingSchema
      },
      default: {
        description: 'unexpected error',
        schema: internalErrorSchema
      }
    }
  }
}

paths.paths['/barcode'] = {
  get: {
    description: 'Return a list of barcodes',
    tags: ['barcode'],
    parameters: [{
      name: 'formtype',
      description: 'type of form',
      required: true,
      type: 'string',
      in: 'query'
    }, {
      name: 'formnumber',
      description: 'form id number',
      required: true,
      type: 'string',
      in: 'query'
    }, {
      name: 'version',
      description: 'form version',
      required: true,
      type: 'string',
      in: 'query'
    }, {
      name: 'numberofpages',
      description: 'number of pages',
      required: true,
      type: 'number',
      in: 'query'
    }],
    responses: {
      200: {
        description: 'A list of barcode data-URIs is returned',
        schema: barcodeSchema
      },
      default: {
        description: 'unexpected error',
        schema: barcodeSchema
      }
    }
  }
}

paths.paths['/flagged'] = {
  get: {
    description: 'Return if the feature flag is ready',
    tags: ['flagged'],
    parameters: [{
      name: 'flag',
      description: 'flag name',
      required: true,
      type: 'string',
      in: 'query'
    }],
    responses: {
      200: {
        description: 'if the feature is allowed',
        schema: flaggedSchema
      },
      default: {
        description: 'unexpected error',
        schema: internalErrorSchema
      }
    }
  }
}

if (flagged('render')) {
  paths.paths['/render'] = {
    get: {
      description: 'Return a DOM string element',
      tags: ['render'],
      // parameters: [{
      //   name: "flag",
      //   description: "flag name",
      //   required: true,
      //   type: "string",
      //   in: "query"
      // }],
      responses: {
        200: {
          description: 'DOM string returned',
          schema: flaggedSchema
        },
        default: {
          description: 'unexpected error',
          schema: internalErrorSchema
        }
      }
    }
  }
}
const api = Object.assign({}, header, paths)

module.exports = api
