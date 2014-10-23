var document = require('global/document')

var CANVAS_WIDTH = 1024
var CANVAS_HEIGHT = 768

var layers = []

exports.create = function() {
  var el = document.createElement('canvas')
  el.width = CANVAS_WIDTH
  el.height = CANVAS_HEIGHT
  el.style.zIndex = layers.length
  document.body.appendChild(el)

  var layer = { canvas: el, ctx: el.getContext('2d'), width: CANVAS_WIDTH, height: CANVAS_HEIGHT }
  layers.push(layer)
  return layer
}

exports.get = function(i) {
  return layers[i]
}