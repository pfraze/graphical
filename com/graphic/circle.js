var panel = require('../panel')

module.exports = function(opts) {
  opts = opts || {}
  var circle        = panel(opts)
  circle.draw       = draw
  circle.lerp       = 0
  circle.lerpPeriod = 3000 // 3s
  circle.lerpLoop   = true
  return circle
}

function draw(ctx) {

  var x = this.getX()
    , y = this.getY()
    , w = this.getWidth()
    , h = this.getHeight()
    , wHalf = (w/2)
    , hHalf = (h/2)
    , radius = (hHalf < wHalf) ? hHalf : wHalf

  // transform
  ctx.save()
  ctx.translate(x + wHalf, y + hHalf)
  var scale = (Math.sin(Math.PI * 2 * this.lerp) + 1) / 4 + .5
  ctx.scale(scale, scale)

  // draw triangle
  ctx.beginPath()
  ctx.fillStyle = this.color || '#fff'
  ctx.strokeStyle = '#333'
  ctx.lineWidth = 2
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  ctx.restore()
}
