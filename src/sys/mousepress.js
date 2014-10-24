var Vector = require('victor')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}
  var mousepress = {
    tick: tick
  }
  return mousepress
}

function tick(com, dT) {
  if ('pressedstate' in com && com.isInside) {
    if (input.mouseLeft && !com.pressedstate) {
      if (com.isInside(input.mouseX, input.mouseY)) {
        com.pressedstate = true
      }
    } else if (!input.mouseLeft && com.pressedstate) {
      com.pressedstate = false
    }
  }
}
