'use strict';

const barcodeTextGenerator = require('./barcode-text-generator');
const barcodeGenerator = require('./barcode-generator');
const dataURIGenerator = require('./data-uri-generator');

function generateBarcode(requestText) {
  return new Promise(resolve => {
    barcodeGenerator(requestText)
    .then(dataURIGenerator)
    .then(barcode => {
      resolve({
        text: requestText,
        barcode: barcode
      });
    });
  });
}

function * read(requestQuery) {
  const requestTexts = barcodeTextGenerator(requestQuery);
  return Promise.all(requestTexts.map(generateBarcode));
}

module.exports = {
  read: read
};