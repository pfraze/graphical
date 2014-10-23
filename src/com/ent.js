var base = require('./base')
var Vector = require('victor')

module.exports = function(opts) {
  opts = opts || {}
  var ent       = base(opts)

  ent.moveSpeed = opts.moveSpeed || 1
  ent.movePos   = null // kept separate from .x,.y so that .x,.y can remain ints
  ent.moveDest  = null
  ent.moveDir   = null
  ent.lastMoveL = 0

  ent.draw      = draw

  ent.tick      = tick
  ent.tickMove  = tickMove

  ent.move   = move

  return ent
}

function draw(ctx) {
  this.drawChilds(ctx)
}

function tick(dT) {
  this.tickMove(dT)
}

function tickMove(dT) {
  if (this.moveDir) {
    // calculate new position
    var dX = this.moveDir.x * this.moveSpeed * dT
    var dY = this.moveDir.y * this.moveSpeed * dT
    this.movePos.x += dX
    this.movePos.y += dY

    // check if we've arived
    var L = this.moveDest.distanceSq(this.movePos)
    if (L > this.lastMoveL) {
      this.x = this.moveDest.x|0
      this.y = this.moveDest.y|0
      this.movePos = null
      this.moveDir = null
      this.moveDest = null
    } else {
      this.lastMoveL = L
      this.x = this.movePos.x|0
      this.y = this.movePos.y|0
    }   
  }
}

function move(x, y, speed) {
  this.movePos   = new Vector(this.x, this.y)
  this.moveDest  = new Vector(x, y)
  this.moveDir   = new Vector(x - this.x, y - this.y)
  this.moveDir.normalize()
  this.lastMoveL = Number.POSITIVE_INFINITY
  if (speed)
    this.moveSpeed = speed
}