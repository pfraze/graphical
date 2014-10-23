var window = require('global/window')
var document = require('global/document')

var systems = []

exports.get = function(i) {
  return systems[i]
}

exports.create = function(opts) {
  opts = opts || {}

  var system = {
    lastT:     0,
    childs:    [],
    
    addChild:  addChild,

    tick:      tick
  }

  if (opts.childs) {
    for (var i=0; i < opts.childs.length; i++) {
      system.addChild(opts.childs[i])
    }
  }

  systems.push(system)
  return system
}

function addChild(child) {
  this.childs.push(child)
}

function tick() {
  var T = Date.now()
  var dT = T - (this.lastT||T)
  if (this.childs.length) {
    for (var i =0; i < this.childs.length; i++)
      this.childs[i].tick(dT)
  }
  this.lastT = T
}
