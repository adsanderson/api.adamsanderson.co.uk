'use strict';

const listOfFlags = {
  truthy: true,
  falsey: false,
  render: process.env.RENDER || false
};

function getFlagged(flag) {
  if (listOfFlags.hasOwnProperty(flag)) {
    return listOfFlags[flag];
  }
  if (process.env.NODE_ENV === 'Testing') {
    return true;
  }
  return false;
}

module.exports = getFlagged;
