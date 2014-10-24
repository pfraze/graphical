var Vector = require('victor')
var input = require('../input')

module.exports = function(opts) {
  opts = opts || {}
  var entselection = {
    tick: tick,
    curEnt: null
  }
  return entselection
}

function tick(coms, dT) {
  var changed = false
  var self = this

  // handle click on an entity (selection)
  coms.forEach(function(com) {
    if (com.isent && 'pressedstate' in com && 'selectedstate' in com) {
      com.selectedstateLast = com.selectedstate
      // recently pressed?
      if (!com.selectedstate && com.pressedstate === 'left' && !com.pressedstateLast) {
        if (self.curEnt)
          self.curEnt.selectedstate = false
        self.curEnt = com
        com.selectedstate = true
        changed = true
      }
    }
  })

  if (changed) {
    // update the selected ent in coms that care
    coms.forEach(function(com) {
      if ('selectedEnt' in com)
        com.selectedEnt = self.curEnt
    })
  }
}
