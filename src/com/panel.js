

module.exports = function(opts) {
  opts = opts || {}
  var panel = {
    x:          opts.x || 0,
    y:          opts.y || 0,
    height:     opts.height,
    width:      opts.width,
    sticky:     opts.sticky,
    background: opts.background
  }

  panel.draw = function(layer) {
    layer.ctx.beginPath()
    layer.ctx.fillStyle = this.background

    switch (opts.sticky) {
      case 'left':   layer.ctx.rect(0, 0, this.width, layer.height); break
      case 'right':  layer.ctx.rect(layer.width - this.width, 0, this.width, layer.height); break
      case 'top':    layer.ctx.rect(0, 0, layer.width, this.height); break
      case 'bottom': layer.ctx.rect(0, layer.height - this.height, layer.width, this.height); break
      default:       layer.ctx.rect(0, 0, this.width, this.height)
    }
    layer.ctx.fill()
  }

  return panel
}
