'use strict'

const barcode = require('../app/barcode')

module.exports.get = async function () {
  let barcodes = await barcode.read(this.request.query)
  this.body = {
    message: 'generated barcodes!',
    barcodes: barcodes
  }
}
