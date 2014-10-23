module.exports = function(opts) {
  opts = opts || {}
  var panel = {
    x:          opts.x || 0,
    y:          opts.y || 0,
    height:     opts.height,
    width:      opts.width,
    sticky:     opts.sticky,
    background: opts.background,
    childs:     opts.childs || []
  }

  panel.draw = function(ctx, container) {
    ctx.beginPath()
    ctx.fillStyle = this.background

    switch (opts.sticky) {
      case 'left':
        this.x = container.x
        this.y = container.y
        this.height = container.height
        break
      case 'right':
        this.x = container.width - this.width
        this.y = container.y
        this.height = container.height
        break
      case 'top':
        this.x = container.x
        this.y = container.y
        this.width = container.width
        break
      case 'bottom': 
        this.x = container.x
        this.y = container.height - this.height
        this.width = container.width
        break
    }
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fill()

    if (this.childs.length) {
      for (var i =0; i < this.childs.length; i++)
        this.childs[i].draw(ctx, this)
    }
  }

  return panel
}
