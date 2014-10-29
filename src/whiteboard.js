var window  = require('global/window')
var layers  = require('./layers')
var systems = require('./systems')
var pos     = require('./positioning')

var panel   = require('./com/panel')
var button  = require('./com/button')
var label   = require('./com/label')
var ent     = require('./com/ent')
var world   = require('./com/world')

var nurble  = require('./com/graphic/nurble')
var stack   = require('./com/graphic/stack')
var circle  = require('./com/graphic/circle')

var cyclone   = require('./com/complex/cyclone')

var CANVAS_WIDTH = window.innerWidth
var CANVAS_HEIGHT = window.innerHeight

// =========
// Systems
// =========
systems.add(require('./sys/lerp')())
systems.add(require('./sys/move')())
systems.add(require('./sys/mousehover')())
systems.add(require('./sys/mousepress')())
systems.add(require('./sys/mouseclickevent')())
systems.add(require('./sys/entselection')())
// =========
// Layers
// =========
var entLayer = layers.create({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT })
var uiLayer = layers.create({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT })
// =========
// Entities
// =========

entLayer.addChild(world({ width: pos.fromRight(), height: pos.fromBottom(50), background: '#eee', onclick: moveSelected, childs: [
  ent({ x: 50,  y: 50, width: 20, height: 20, childs: [label({ text: 'Nurble', baseline: 'bottom' }), nurble({ color: '#fff', width: 20, height: 20 })] }),
  ent({ x: 150, y: 50, width: 40, height: 30, childs: [label({ text: 'Stack', baseline: 'bottom' }), stack({ width: 40, height: 30, slices: 4, colors: ['#fff', '#ddd', '#bbb', '#999'] })] }),
  ent({ x: 250, y: 50, width: 20, height: 20, childs: [label({ text: 'Circle', baseline: 'bottom' }), circle({ width: 20, height: 20 })] }),

  ent({ x: 50, y: 150, width: 20, height: 20, childs: [
    label({ text: 'Cyclone', baseline: 'bottom' }),
    cyclone({ width: 20, height: 20, childs: [
      nurble({ width: 20, height: 20 }),
      circle({ width: 20, height: 20 }),
      nurble({ width: 20, height: 20 }),
      circle({ width: 20, height: 20 }),
      nurble({ width: 20, height: 20 }),
      circle({ width: 20, height: 20 })
    ]})
  ]}),
]}))
function moveSelected(e) {
  if (e.mouseRight && this.selectedEnt)
    this.selectedEnt.move(e.mouseX, e.mouseY)
}
// =========
// UI
// =========
var log = console.log.bind(console)
uiLayer.addChild(panel({ x: 0, y: pos.fromBottom(50), width: pos.fromRight(), height: 50, background: '#ccc', childs: [
  panel({ x: 20, width: pos.fromRight(40), height: 40, childs: [
    button({ x: 0,   width: 120, height: 40, background: '#999', hover: '#aaa', pressed: '#555', onclick: log, childs: [label({ x: 5, text: 'hello world', baseline: 'top' })] }),
    button({ x: 140, width: 250, height: 40, background: '#999',                pressed: '#555', onclick: log, childs: [require('./com/debug/cur-ent-label')({ x: 5, baseline: 'top' })] }),
  ]})
]}))
// =========
// Main Loop
// =========
function draw() {
  uiLayer.draw()
  entLayer.draw()
  window.requestAnimationFrame(draw)
}
draw()

function tick() {
  systems.tick()
  window.requestAnimationFrame(tick)
}
tick()