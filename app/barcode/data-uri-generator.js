const imageDataURI = require('image-data-uri')

const MEDIATYPE = 'PNG'

module.exports = function dataURIGenerator (dataBuffer) {
  return imageDataURI.encode(dataBuffer, MEDIATYPE)
}
