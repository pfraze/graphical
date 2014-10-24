var panel = require('../panel')

module.exports = function(opts) {
  opts = opts || {}
  var nurble        = panel(opts)
  nurble.draw       = draw
  nurble.lerp       = 0
  nurble.lerpPeriod = 3000 // 3s
  nurble.lerpLoop   = true
  return nurble
}

function draw(ctx) {
  if (this.background) {
    var x = this.getX()
      , y = this.getY()
      , w = this.getWidth()
      , h = this.getHeight()
      , wHalf = (w/2)|0
      , hHalf = (h/2)|0

    // transform
    ctx.save()
    ctx.translate(x + wHalf, y + hHalf)
    ctx.rotate(Math.PI * 2 * this.lerp)
    var scale = (Math.sin(Math.PI * 4 * this.lerp) + 1) / 4 + .25
    ctx.scale(scale, scale)

    // draw triangle
    ctx.beginPath()
    ctx.fillStyle = this.background
    ctx.moveTo(-wHalf, -hHalf)
    ctx.lineTo(-wHalf,  hHalf)
    ctx.lineTo( wHalf,  0)
    ctx.fill()

    ctx.restore()
  }
}
