var window = require('global/window')
var document = require('global/document')

var CANVAS_WIDTH = window.innerWidth
var CANVAS_HEIGHT = window.innerHeight

var layers = []

exports.create = function() {
  var el = document.createElement('canvas')
  el.width = CANVAS_WIDTH
  el.height = CANVAS_HEIGHT
  el.style.zIndex = layers.length
  document.body.appendChild(el)

  var layer = {
    canvas: el,
    ctx: el.getContext('2d'),
    x: 0,
    y: 0,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    draw: drawComponent
  }
  layers.push(layer)
  return layer
}

exports.get = function(i) {
  return layers[i]
}

function drawComponent(com) {
  if (Array.isArray(com)) {
    for (var i=0; i < com.length; i++)
      this.draw(com[i])
    return
  }

  if (!com.draw)
    throw 'Cannot draw component, no .draw function found'
  com.draw(this.ctx, this)
}