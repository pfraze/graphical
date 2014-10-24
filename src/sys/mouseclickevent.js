var Vector = require('victor')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}
  var mouseclickevent = {
    tick: tick
  }
  return mouseclickevent
}

function tick(com, dT) {
  if ('pressedstate' in com && 'onclick' in com) {
    if (com.pressedstate && !com.pressedstateLast) {
      com.onclick({
        mouseX: input.mouseX,
        mouseY: input.mouseY,
        mouseLeft: input.mouseLeft,
        mouseMiddle: input.mouseMiddle,
        mouseRight: input.mouseRight
      })
    }
    com.pressedstateLast = com.pressedstate
  }
}
