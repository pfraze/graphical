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

exports.fromCenterX = function(x) {
  x = x || 0
  return function() {
    return (this.parent.getWidth()/2) - this.getWidth()/2 + x
  }
}

exports.fromCenterY = function(y) {
  y = y || 0
  return function() {
    return (this.parent.getHeight()/2) - this.getHeight()/2 + y
  }
}