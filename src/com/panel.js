module.exports = function(opts) {
  opts = opts || {}
  var panel = {
    x:              opts.x || 0,
    y:              opts.y || 0,
    height:         opts.height || 0,
    width:          opts.width || 0,
    background:     opts.background,
    parent:         null,
    childs:         [],

    getX:           getX,
    getY:           getY,
    getWidth:       getWidth,
    getHeight:      getHeight,

    addChild:       addChild,

    draw:           draw,
    drawBackground: drawBackground,
    drawChilds:     drawChilds
  }

  if (opts.childs) {
    for (var i=0; i < opts.childs.length; i++) {
      panel.addChild(opts.childs[i])
    }
  }

  return panel
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

function addChild(child) {
  child.parent = this
  this.childs.push(child)
}

function draw(ctx) {
  this.drawBackground(ctx)
  this.drawChilds(ctx)
}

function drawBackground(ctx) {
  if (this.background) {
    ctx.beginPath()
    ctx.fillStyle = this.background
    ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight())
    ctx.fill()
  }
}

function drawChilds(ctx) {
  if (this.childs.length) {
    for (var i =0; i < this.childs.length; i++)
      this.childs[i].draw(ctx)
  }
}
