var panel = require('./panel')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}

  var button         = panel(opts)
  button.hover       = opts.hover
  button.pressed     = opts.pressed

  if (button.hover)
    button.hoverstate = false
  button.pressedstate = false
  button.isInside     = isInside

  button.draw        = draw
  button.drawHover   = drawHover
  button.drawPressed = drawPressed

  return button
}

function draw(ctx) {
  if (this.pressedstate)
    this.drawPressed(ctx)
  else if (this.hoverstate)
    this.drawHover(ctx)
  else
    this.drawBackground(ctx)
  this.drawChilds(ctx)
}

function drawHover(ctx) {
  if (this.hover) {
    ctx.beginPath()
    ctx.fillStyle = this.hover
    ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight())
    ctx.fill()
  }
}

function drawPressed(ctx) {
  if (this.pressed) {
    ctx.beginPath()
    ctx.fillStyle = this.pressed
    ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight())
    ctx.fill()
  }
}

function isInside(xT, yT) {
  var x = this.getX()
    , y = this.getY()
    , width = this.getWidth()
    , height = this.getHeight()
  if (xT < x) return false
  if (yT < y) return false
  if (xT > x + width) return false
  if (yT > y + height) return false
  return true
}