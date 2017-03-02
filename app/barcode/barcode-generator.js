const bwipjs = require('bwip-js')

module.exports = function textToBarcode (text) {
  return new Promise((resolve, reject) => {
    bwipjs.toBuffer({
      bcid: 'datamatrix', // Barcode type
      text: text // Text to encode
      // scale: 3, // 3x scaling factor
      // height: 10, // Bar height, in millimeters
      // includetext: true, // Show human-readable text
      // textxalign: 'center', // Always good to set this
      // textfont: 'Inconsolata', // Use your custom font
      // textsize: 13 // Font size, in points
    }, function (err, png) {
      if (err) {
        return reject(err)
      }
      return resolve(png)
    })
  })
}
