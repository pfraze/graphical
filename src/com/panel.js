module.exports = function(opts) {
  opts = opts || {}
  var panel = {
    x:          opts.x || 0,
    y:          opts.y || 0,
    height:     opts.height,
    width:      opts.width,
    sticky:     opts.sticky,
    background: opts.background,
    parent:     null,
    childs:     [],

    getX:       getX,
    getY:       getY,
    getWidth:   getWidth,
    getHeight:  getHeight,

    addChild:   addChild,

    draw:       draw
  }

  if (opts.childs) {
    for (var i=0; i < opts.childs.length; i++) {
      panel.addChild(opts.childs[i])
    }
  }

  return panel
}

function getX() {
  switch (this.sticky) {
    case 'left':       return this.parent.getX()
    case 'right':      return this.parent.getWidth() - this.width
    case 'vertical':   return this.x
    case 'top':        return this.parent.getX()
    case 'bottom':     return this.parent.getX()
    case 'horizontal': return this.parent.getX()
  }
  return this.x
}

function getY() {
  switch (this.sticky) {
    case 'left':       return this.parent.getY()
    case 'right':      return this.parent.getY()
    case 'vertical':   return this.parent.getY()
    case 'top':        return this.parent.getY()
    case 'bottom':     return this.parent.getHeight() - this.height
    case 'horizontal': return this.y
  }
  return this.y
}

function getWidth() {
  switch (this.sticky) {
    case 'left':       return this.width
    case 'right':      return this.width
    case 'vertical':   return this.width
    case 'top':        return this.parent.getWidth()
    case 'bottom':     return this.parent.getWidth()
    case 'horizontal': return this.parent.getWidth()
  }
  return this.width
}

function getHeight() {
  switch (this.sticky) {
    case 'left':       return this.parent.getHeight()
    case 'right':      return this.parent.getHeight()
    case 'vertical':   return this.parent.getHeight()
    case 'top':        return this.height
    case 'bottom':     return this.height
    case 'horizontal': return this.height
  }
  return this.width
}

function addChild(child) {
  child.parent = this
  this.childs.push(child)
}

function draw(ctx) {
  ctx.beginPath()
  ctx.fillStyle = this.background
  ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight())
  ctx.fill()

  if (this.childs.length) {
    for (var i =0; i < this.childs.length; i++)
      this.childs[i].draw(ctx)
  }
}
