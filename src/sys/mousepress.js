var Vector = require('victor')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}
  var mousepress = {
    tick: tick
  }
  return mousepress
}

function tick(coms, dT) {
  coms.forEach(function(com) {
    if ('pressedstate' in com && com.isInside) {
      com.pressedstateLast = com.pressedstate
      if (input.mouseLeft && !com.pressedstate) {
        if (com.isInside(input.mouseX, input.mouseY)) {
          com.pressedstate = true
        }
      } else if (!input.mouseLeft && com.pressedstate) {
        com.pressedstate = false
      }
    }
  })
}
