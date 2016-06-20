'use strict';

const listOfFlags = {
  truthy: true,
  falsey: false
};

function getFlagged (flag) {
  if (listOfFlags.hasOwnProperty(flag)) {
    return listOfFlags[flag];
  }
  return false;
}

module.exports = getFlagged;