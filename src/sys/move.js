var Vector = require('victor')

module.exports = function(opts) {
  opts = opts || {}
  var move = {
    tick: tick
  }
  return move
}

function tick(coms, dT) {
  coms.forEach(function(com) {
    if (com.moveDest) {
      if (!com.moveDir) {
        // initialize a new move
        com.lastMoveL = Number.POSITIVE_INFINITY
        com.movePos   = new Vector(com.x, com.y)
        com.moveDir   = new Vector(x - com.x, y - com.y)
        com.moveDir.normalize()
      }

      // calculate new position
      var dX = com.moveDir.x * com.moveSpeed * dT
      var dY = com.moveDir.y * com.moveSpeed * dT
      com.movePos.x += dX
      com.movePos.y += dY

      // check if we've arived
      var L = com.moveDest.distanceSq(com.movePos)
      if (L > com.lastMoveL) {
        com.x = com.moveDest.x|0
        com.y = com.moveDest.y|0
        com.moveDest = undefined
        com.lastMoveL = undefined
        com.movePos = undefined
        com.moveDir = undefined
      } else {
        com.lastMoveL = L
        com.x = com.movePos.x|0
        com.y = com.movePos.y|0
      }   
    }
  })
}
