var layers = require('./layers')
var window = require('global/window')

var layer1 = layers.create()

var panel = require('./com/panel')

var panels = [
  panel({ height: window.innerHeight / 5, sticky: 'bottom', background: '#ccc' })
]

function draw() {
  layer1.ctx.save()
  layer1.draw(panels)
  layer1.ctx.restore()

  window.requestAnimationFrame(draw)
}
draw()
