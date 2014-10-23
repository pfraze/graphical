var panel = require('./panel')

module.exports = function(opts) {
  opts = opts || {}
  var label        = panel(opts)
  label.font       = opts.font || '12pt Consolas'
  label.baseline   = opts.baseline || 'top'
  label.foreground = opts.foreground || 'black'
  label.text       = opts.text

  label.draw       = draw
  label.drawText   = drawText

  return label
}

function draw(ctx) {
  this.drawBackground(ctx)
  this.drawText(ctx)
}

function drawText(ctx) {
  if (this.text) {
    ctx.font = this.font
    ctx.fillStyle = this.foreground
    ctx.textBaseline = this.baseline
    ctx.fillText(this.text, this.getX(), this.getY());
  }
}