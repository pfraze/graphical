module.exports = function(opts) {
  opts = opts || {}
  var lerp = {
    tick: tick
  }
  return lerp
}

function tick(coms, dT) {
  coms.forEach(function(com) {
    if (com.lerpPeriod) {
      // update the lerp time
      if ('lerpT' in com)
        com.lerpT += dT
      else
        com.lerpT = 0
      com.lerp = com.lerpT / com.lerpPeriod

      // lerp end condition
      if (com.lerp >= 1) {
        com.lerp = 1
        if (com.lerpLoop)
          com.lerpT = 0
        else {
          com.lerpT = undefined
          com.lerpPeriod = undefined
        }
      }
    }
  })
}
