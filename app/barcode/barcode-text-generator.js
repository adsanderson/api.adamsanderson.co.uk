'use strict';

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length - size);
}

function buildRequestString(requestQueryObj, pageNumber) {
  // S-GYN-005-01~01~01
  const formtype = requestQueryObj.formtype.toUpperCase();
  const formnumber = pad(requestQueryObj.formnumber, 3);
  const version = pad(requestQueryObj.version, 2);
  const pageNumberFormatted = pad((pageNumber + 1), 2);
  const numberofpages = pad(requestQueryObj.numberofpages, 2);
  return `S-${formtype}-${formnumber}-${version}~${pageNumberFormatted}~${numberofpages}`; // eslint-disable-line max-len
}

module.exports = function barcodeTextGenerator(requestQueryObj) {
  let requestStrings = [];

  for (let pageNumber = requestQueryObj.numberofpages; pageNumber--;) {
    const requestString = buildRequestString(requestQueryObj, pageNumber);
    requestStrings.unshift(requestString);
  }

  return requestStrings;
};
