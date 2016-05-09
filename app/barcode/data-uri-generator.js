const imageDataURI = require('image-data-uri');

const MEDIATYPE = 'PNG';

module.exports = function dataURIGenerator(dataBuffer) {
  console.log(dataBuffer);
  // return listOfBuffers.map((dataBuffer) => {
  //   return imageDataURI.encode(dataBuffer, MEDIATYPE);
  // });

  return imageDataURI.encode(dataBuffer, MEDIATYPE);
};
