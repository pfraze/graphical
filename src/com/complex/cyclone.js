var panel = require('../panel')

module.exports = function(opts) {
  opts = opts || {}
  var cyclone        = panel(opts)
  cyclone.draw       = draw
  cyclone.lerp       = 0
  cyclone.lerpPeriod = 3000 // 3s
  cyclone.lerpLoop   = true
  return cyclone
}

function draw(ctx) {

  var w = this.getWidth()
    , h = this.getHeight()

  if (this.childs.length) {
    var radsBetweenChilds = (Math.PI * 2) / this.childs.length
    // draw childs with transformations
    for (var i =0; i < this.childs.length; i++) {
      ctx.save()
      var x = (Math.sin((Math.PI * this.lerp * 2) + (i * radsBetweenChilds)) + 1) * w
      var y = (Math.cos((Math.PI * this.lerp * 2) + (i * radsBetweenChilds)) + 1) * h
      ctx.translate(x, y)
      this.childs[i].draw(ctx)
      ctx.restore()
    }
  }  
}
