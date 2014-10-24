var base = require('./base')
var Vector = require('victor')

module.exports = function(opts) {
  opts = opts || {}
  var ent   = base(opts)
  ent.draw  = draw
  ent.move  = move
  return ent
}

function draw(ctx) {
  this.drawChilds(ctx)
}

function move(x, y, speed) {
  // initialize move attributes for the move system
  this.moveDest  = new Vector(x, y)
  this.moveSpeed = speed || 1
  this.lastMoveL = Number.POSITIVE_INFINITY
  this.movePos   = new Vector(this.x, this.y)
  this.moveDir   = new Vector(x - this.x, y - this.y)
  this.moveDir.normalize()
}