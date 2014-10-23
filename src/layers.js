var window = require('global/window')
var document = require('global/document')

var layers = []

exports.get = function(i) {
  return layers[i]
}

exports.create = function(opts) {
  opts = opts || {}

  // create canvas
  var el = document.createElement('canvas')
  el.width = opts.width
  el.height = opts.height
  el.style.zIndex = layers.length
  document.body.appendChild(el)

  var layer = {
    canvas:    el,
    ctx:       el.getContext('2d'),
    x:         opts.x || 0,
    y:         opts.y || 0,
    width:     opts.width,
    height:    opts.height,
    childs:    [],
    
    getX:      getX,
    getY:      getY,
    getWidth:  getWidth,
    getHeight: getHeight,

    addChild:  addChild,

    draw:      draw
  }

  if (opts.childs) {
    for (var i=0; i < opts.childs.length; i++) {
      layer.addChild(opts.childs[i])
    }
  }

  layers.push(layer)
  return layer
}

function getX() { return this.x }
function getY() { return this.y }
function getWidth() { return this.width }
function getHeight() { return this.height }

function addChild(child) {
  child.parent = this
  this.childs.push(child)
}

function draw(ctx) {
  this.ctx.save()
  if (this.childs.length) {
    for (var i =0; i < this.childs.length; i++)
      this.childs[i].draw(this.ctx)
  }
  this.ctx.restore()
}
