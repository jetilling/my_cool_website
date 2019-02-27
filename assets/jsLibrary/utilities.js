const $ = require('./eventHandlers.js')

var parse = function(item) {
  return JSON.parse(item)
}

/**
 * Render Html
 * 
 * @description Sets the html in the #main div
 * @param html 
 */
var renderHtml = (element, html) => {
  $.grabById(element).innerHTML = html
}

module.exports = {
  parse: parse,
  renderHtml: renderHtml
}