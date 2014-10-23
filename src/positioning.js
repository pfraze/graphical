exports.fromRight = function(x) {
  return function() {
    return this.parent.getWidth() - x
  }
}

exports.fromBottom = function(y) {
  return function() {
    return this.parent.getHeight() - y
  }
}