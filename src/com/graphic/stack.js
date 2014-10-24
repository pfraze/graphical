var panel = require('../panel')

module.exports = function(opts) {
  opts = opts || {}
  var stack         = panel(opts)
  stack.draw        = draw
  stack.slices      = opts.slices || 5
  stack.backgrounds = opts.backgrounds || []
  stack.lerp        = 0
  stack.lerpPeriod  = 3000 // 3s
  stack.lerpLoop    = true
  return stack
}

function draw(ctx) {
  if (this.background) {
    var x = this.getX()
      , y = this.getY()
      , w = this.getWidth()
      , h = this.getHeight()
      , hSlice = (h/(this.slices+1))|0
      , wFifth = (w/5)|0

    for (var i=this.slices-1; i >= 0; i--) {
      var top = (i*hSlice)
      var bot = ((i+2)*hSlice)

      // apply animation
      ctx.save()
      var bounce = (Math.sin(Math.PI * 2 * this.lerp + i/2) + 1) * 3 / (i+1)
      ctx.translate(x + (w/2)|0, y + hSlice*i + bounce)

      // draw layers
      ctx.beginPath()
      ctx.fillStyle = (this.backgrounds[i]) ? this.backgrounds[i] : this.background
      ctx.moveTo(-wFifth*2, 0)
      ctx.lineTo(wFifth*2, 0)
      ctx.lineTo(w/2, hSlice*3)
      ctx.lineTo(-w/2, hSlice*3)
      ctx.fill()

      ctx.restore()
    }
  }
}
