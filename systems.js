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
  for (var i=0; i < systems.length; i++) {
    systems[i].tick(components, dT)
  }
  this.lastT = T
}
