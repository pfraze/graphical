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
      var mouseDown = input.mouseLeft || input.mouseMiddle || input.mouseRight
      if (mouseDown && !com.pressedstate) {
        if (com.isInside(input.mouseX, input.mouseY)) {
          com.pressedstate = true
        }
      } else if (!mouseDown && com.pressedstate) {
        com.pressedstate = false
      }
    }
  })
}
