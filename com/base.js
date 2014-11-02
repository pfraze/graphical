var cuid = require('cuid')
var systems = require('../systems')
var util = require('../util')

module.exports = function(opts) {
  opts = opts || {}
  var base = {
    uid:            cuid(),
    x:              opts.x || 0,
    y:              opts.y || 0,
    height:         opts.height || 0,
    width:          opts.width || 0,
    parent:         null,
    childs:         [],

    getX:           getX,
    getY:           getY,
    getWidth:       getWidth,
    getHeight:      getHeight,
    isInside:       isInside,

    addChild:       addChild,

    draw:           draw,
    drawChilds:     drawChilds,

    tick:           tick,
    tickChilds:     tickChilds
  }

  if (opts.childs) {
    for (var i=0; i < opts.childs.length; i++) {
      base.addChild(opts.childs[i])
    }
  }

  systems.addCom(base)
  return base
}

function getX() {
  if (typeof this.x == 'function')
    return this.parent.getX() + this.x.call(this)
  return this.parent.getX() + this.x
}

function getY() {
  if (typeof this.y == 'function')
    return this.parent.getY() + this.y.call(this)
  return this.parent.getY() + this.y
}

function getWidth() {
  if (typeof this.width == 'function')
    return this.width.call(this)
  return this.width
}

function getHeight() {
  if (typeof this.height == 'function')
    return this.height.call(this)
  return this.height
}

function isInside(xT, yT) {
  return util.isInside(xT, yT, this.getX(), this.getY(), this.getWidth(), this.getHeight())
}

function addChild(child) {
  child.parent = this
  this.childs.push(child)
}

function draw(ctx) {
  this.drawChilds(ctx)
}

function drawChilds(ctx) {
  if (this.childs.length) {
    for (var i =0; i < this.childs.length; i++)
      this.childs[i].draw(ctx)
  }
}

function tick(dT) {
  this.drawChilds(dT)
}

function tickChilds(dT) {
  if (this.childs.length) {
    for (var i =0; i < this.childs.length; i++)
      this.childs[i].tick(dT)
  }
}
