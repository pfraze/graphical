var base = require('./base')
var Vector = require('victor')

module.exports = function(opts) {
  opts = opts || {}
  var ent   = base(opts)
  
  ent.isent = true
  ent.pressedstate = false
  ent.selectedstate = false

  ent.draw  = draw
  ent.move  = move
  return ent
}

function draw(ctx) {
  if (this.selectedstate) {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight())
    ctx.stroke()
    ctx.closePath()
  }

  this.drawChilds(ctx)
}

function move(x, y, speed) {
  // initialize move attributes for the move system
  this.moveDest  = new Vector(x, y)
  this.moveSpeed = speed || 1
  this.lastMoveL = Number.POSITIVE_INFINITY
  this.movePos   = new Vector(this.getX(), this.getY())
  this.moveDir   = new Vector(x - this.getX(), y - this.getY())
  this.moveDir.normalize()
}