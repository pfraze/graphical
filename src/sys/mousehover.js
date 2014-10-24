var Vector = require('victor')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}
  var mousehover = {
    tick: tick
  }
  return mousehover
}

function tick(com, dT) {
  if ('hoverstate' in com && com.isInside) {
    if (!com.hoverstate) {
      if (com.isInside(input.mouseX, input.mouseY)) {
        com.hoverstate = true
      }
    } else {
      if (!com.isInside(input.mouseX, input.mouseY)) {
        com.hoverstate = false
      }
    }
  }
}
