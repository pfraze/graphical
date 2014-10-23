var panel = require('./panel')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}

  var button                 = panel(opts)
  button.hoverBackground     = opts.hoverBackground

  button.draw                = draw
  button.drawHoverBackground = drawHoverBackground

  return button
}

function draw(ctx) {
  if (inbounds(input.mouseX, input.mouseY, this.getX(), this.getY(), this.getWidth(), this.getHeight()))
    this.drawHoverBackground(ctx)
  else
    this.drawBackground(ctx)
  this.drawChilds(ctx)
}

function drawHoverBackground(ctx) {
  if (this.hoverBackground) {
    ctx.beginPath()
    ctx.fillStyle = this.hoverBackground
    ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight())
    ctx.fill()
  }
}

function inbounds(xT, yT, x, y, width, height) {
  if (xT < x) return false
  if (yT < y) return false
  if (xT > x + width) return false
  if (yT > y + height) return false
  return true
}