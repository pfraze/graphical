var base = require('./base')

module.exports = function(opts) {
  opts = opts || {}
  var panel            = base(opts)
  panel.background     = opts.background

  panel.draw           = draw
  panel.drawBackground = drawBackground

  return panel
}

function draw(ctx) {
  this.drawBackground(ctx)
  this.drawChilds(ctx)
}

function drawBackground(ctx) {
  if (this.background) {
    ctx.beginPath()
    ctx.fillStyle = this.background
    ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight())
    ctx.fill()
  }
}
