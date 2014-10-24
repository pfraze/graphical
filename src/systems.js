var window = require('global/window')
var document = require('global/document')

var systems = []
var components = []

exports.get = function(i) {
  return systems[i]
}

exports.add = function(sys) {
  systems.push(sys)
}

exports.addCom = function(com) {
  components.push(com)
}


exports.tick = function() {
  var T = Date.now()
  var dT = T - (this.lastT||T)
  for (var i=0; i < components.length; i++) {
    for (var j=0; j < systems.length; j++) {
      systems[j].tick(components[i], dT)
    }
  }
  this.lastT = T
}
