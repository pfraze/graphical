var layers = require('./layers')
var window = require('global/window')

var layer1 = layers.create()

var panel = require('./com/panel')

var panels = [
  panel({ height: layer1.height / 4, sticky: 'bottom', background: '#ccc', childs: [
    panel({ width: layer1.width / 4, sticky: 'left', background: 'red' }),
    panel({ width: layer1.width / 4, sticky: 'right', background: 'red' }),
  ]})
]

function draw() {
  layer1.ctx.save()
  layer1.draw(panels)
  layer1.ctx.restore()

  window.requestAnimationFrame(draw)
}
draw()
