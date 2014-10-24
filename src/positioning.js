exports.fromRight = function(x) {
  x = x || 0
  return function() {
    return this.parent.getWidth() - x
  }
}

exports.fromBottom = function(y) {
  y = y || 0
  return function() {
    return this.parent.getHeight() - y
  }
}