var panel = require('../panel')

module.exports = function(opts) {
  opts = opts || {}
  var flock        = panel(opts)
  flock.draw       = draw
  flock.lerpLast   = 0
  flock.lerpCont   = 0 // continuous lerp
  flock.lerp       = 0
  flock.lerpPeriod = 3000 // 3s
  flock.lerpLoop   = true
  flock.randoms1 = []
  flock.randoms2 = []
  return flock
}

function draw(ctx) {

  var w = this.getWidth()
    , h = this.getHeight()

  if (this.childs.length) {
    // draw childs with transformations
    for (var i =0; i < this.childs.length; i++) {

      this.randoms1[i] = this.randoms1[i] || (Math.random()/4 + .15)
      this.randoms2[i] = this.randoms2[i] || (Math.random()/4 + .15)

      ctx.save()
      var x,y
      x = (Math.sin(Math.PI * this.lerpCont * 2 * i * this.randoms1[i]) + 1) * w
      y = (Math.cos(Math.PI * this.lerpCont * 2 * i * this.randoms2[i]) + 1) * h
      ctx.translate(x, y)
      this.childs[i].draw(ctx)
      ctx.restore()
    }
  }
  var dLerp = (this.lerp - this.lerpLast)
  if (dLerp > 0)
    this.lerpCont += dLerp
  this.lerpLast = this.lerp
}
