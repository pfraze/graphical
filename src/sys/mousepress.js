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

      // construct pressed state
      var pressedstate = ''
      if (input.mouseLeft)   pressedstate += 'left '
      if (input.mouseMiddle) pressedstate += 'middle '
      if (input.mouseRight)  pressedstate += 'right '

      // update component
      if (pressedstate && !com.pressedstate) {
        if (com.isInside(input.mouseX, input.mouseY)) {
          com.pressedstate = pressedstate.trim()
        }
      } else if (!pressedstate && com.pressedstate) {
        com.pressedstate = false
      }
    }
  })
}
