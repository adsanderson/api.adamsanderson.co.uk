'use strict'

module.exports = function (response) {
  if (response.status >= 400) {
    throw new Error('Bad response from server')
  }
  return response.json()
}
