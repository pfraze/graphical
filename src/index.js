var layers = require('./layers')
var window = require('global/window')

var CANVAS_WIDTH = window.innerWidth
var CANVAS_HEIGHT = window.innerHeight

var panel = require('./com/panel')
var layer1 = layers.create({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT })
layer1.addChild(panel({ height: layer1.height / 4, sticky: 'bottom', background: '#ccc', childs: [
  panel({ width: layer1.width / 4, sticky: 'left', background: 'red' }),
  panel({ width: layer1.width / 4, sticky: 'right', background: 'red' }),
]}))

function draw() {
  layer1.ctx.save()
  layer1.draw()
  layer1.ctx.restore()

  window.requestAnimationFrame(draw)
}
draw()
