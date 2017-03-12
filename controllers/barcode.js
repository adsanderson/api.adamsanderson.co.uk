'use strict'

const barcode = require('../app/barcode')

module.exports.get = async function (ctx) {
  let barcodes = await barcode.read(ctx.request.query)
  ctx.body = {
    message: 'generated barcodes!',
    barcodes: barcodes
  }
}
