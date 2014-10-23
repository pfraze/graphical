var layers = require('./layers')
var window = require('global/window')

var CANVAS_WIDTH = window.innerWidth
var CANVAS_HEIGHT = window.innerHeight

var panel = require('./com/panel')
var button = require('./com/button')
var label = require('./com/label')
var layer1 = layers.create({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT })
layer1.addChild(panel({ height: layer1.height / 4, sticky: 'bottom', background: '#ccc', childs: [
  panel({ sticky: 'top', height: 40, childs: [
    button({ sticky: 'vertical', width: 120, background: 'gray', hover: '#aaa', pressed: '#555', childs: [label({ text: 'hello world' })] }),
    button({ sticky: 'vertical', x: 140, width: 120, background: 'gray', hover: '#aaa', pressed: '#555', childs: [label({ text: 'hello world 2' })] }),
  ]})
]}))

function draw() {
  layer1.ctx.save()
  layer1.draw()
  layer1.ctx.restore()

  window.requestAnimationFrame(draw)
}
draw()
