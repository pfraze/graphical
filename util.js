exports.isInside = function(xT, yT, x, y, width, height) {
  if (xT < x) return false
  if (yT < y) return false
  if (xT > x + width) return false
  if (yT > y + height) return false
  return true
}