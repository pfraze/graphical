var layers = require('./layers')
var window = require('global/window')

var l1 = layers.create()
var l2 = layers.create()

function draw() {
  l1.ctx.fillStyle = '#000'
  l1.ctx.font = "bold 20pt Arial";
  l1.ctx.fillText('Hello, World', (l1.width*Math.random())|0, (l1.height*Math.random())|0)

  l2.ctx.fillStyle = '#f00'
  l2.ctx.font = "bold 20pt Arial";
  l2.ctx.fillText('Hello, World', (l2.width*Math.random())|0, (l2.height*Math.random())|0)

  window.requestAnimationFrame(draw)
}
draw()
