var label = require('../label')

module.exports = function(opts) {
  opts = opts || {}
  var celabel         = label(opts)
  celabel.drawText    = drawText
  celabel.selectedEnt = null
  return celabel
}

function draw(ctx) {
  this.drawBackground(ctx)
  this.drawText(ctx)
}

function drawText(ctx) {
  ctx.font = this.font
  ctx.fillStyle = this.foreground
  ctx.textBaseline = this.baseline
  var text = (this.selectedEnt) ? this.selectedEnt.uid : 'No Selection'
  ctx.fillText(text, this.getX(), this.getY());
}