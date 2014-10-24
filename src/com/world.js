var panel = require('./panel')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}

  var world          = panel(opts)
  world.selectedEnt  = null
  world.pressedstate = false
  world.onclick      = opts.onclick

  return world
}
