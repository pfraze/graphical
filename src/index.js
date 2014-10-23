var window = require('global/window')
var layers = require('./layers')
var panel = require('./com/panel')
var button = require('./com/button')
var label = require('./com/label')
var pos = require('./positioning')

var CANVAS_WIDTH = window.innerWidth
var CANVAS_HEIGHT = window.innerHeight

var layer1 = layers.create({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT })
layer1.addChild(panel({ x: 15, y: pos.fromBottom(50), width: pos.fromRight(30), height: 50, background: '#ccc', childs: [
  panel({ x: 20, width: pos.fromRight(40), height: 40, childs: [
    button({ x: 0,   width: 120, height: 40, background: 'gray', hover: '#aaa', pressed: '#555', childs: [label({ x: 5, text: 'hello world', baseline: 'bottom' })] }),
    button({ x: 140, width: 120, height: 40, background: 'gray', hover: '#aaa', pressed: '#555', childs: [label({ x: 5, text: 'hello world 2', baseline: 'bottom' })] }),
  ]})
]}))

function draw() {
  layer1.ctx.save()
  layer1.draw()
  layer1.ctx.restore()

  window.requestAnimationFrame(draw)
}
draw()
