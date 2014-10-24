var Vector = require('victor')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}
  var mouseclickevent = {
    tick: tick
  }
  return mouseclickevent
}

function tick(coms, dT) {
  coms.forEach(function(com) {
    if ('pressedstate' in com && 'onclick' in com) {
      if (com.pressedstate && !com.pressedstateLast) {
        com.onclick.call(com, {
          mouseX: input.mouseX,
          mouseY: input.mouseY,
          mouseLeft: input.mouseLeft,
          mouseMiddle: input.mouseMiddle,
          mouseRight: input.mouseRight
        })
      }
    }
  })
}
