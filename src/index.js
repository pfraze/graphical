var window  = require('global/window')
var layers  = require('./layers')
var systems = require('./systems')
var pos     = require('./positioning')

var panel   = require('./com/panel')
var button  = require('./com/button')
var label   = require('./com/label')
var ent     = require('./com/ent')

var CANVAS_WIDTH = window.innerWidth
var CANVAS_HEIGHT = window.innerHeight

// =========
// Systems
// =========
systems.add(require('./sys/move')())
systems.add(require('./sys/mousehover')())
systems.add(require('./sys/mousepress')())
// =========
// Layers
// =========
var entLayer = layers.create({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT })
var uiLayer = layers.create({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT })
// =========
// Entities
// =========
var testEnt = ent({ x: 50, y: 50, childs: [label({ text: 'Test Ent' })] })
entLayer.addChild(panel({ width: pos.fromRight(), height: pos.fromBottom(50), background: '#fff', childs: [
  testEnt
]}))
// =========
// UI
// =========
uiLayer.addChild(panel({ x: 15, y: pos.fromBottom(50), width: pos.fromRight(30), height: 50, background: '#ccc', childs: [
  panel({ x: 20, width: pos.fromRight(40), height: 40, childs: [
    button({ x: 0,   width: 120, height: 40, background: 'gray', hover: '#aaa', pressed: '#555', childs: [label({ x: 5, text: 'hello world', baseline: 'bottom' })] }),
    button({ x: 140, width: 120, height: 40, background: 'gray',                pressed: '#555', childs: [label({ x: 5, text: 'hello world 2', baseline: 'bottom' })] }),
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

// :DEBUG:
window.testEnt = testEnt