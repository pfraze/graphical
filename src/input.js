var document = require('global/document')

exports.mouseX = 0
exports.mouseY = 0
exports.mouseLeft = false
exports.mouseMiddle = false
exports.mouseRight = false

document.addEventListener('mousemove', function(e){ 
  exports.mouseX = e.clientX || e.pageX
  exports.mouseY = e.clientY || e.pageY 
}, false);

document.addEventListener('mousedown', function(e){ 
  if (e.button === 0) exports.mouseLeft = true
  if (e.button === 1) exports.mouseMiddle = true
  if (e.button === 2) exports.mouseRight = true
}, false);

document.addEventListener('mouseup', function(e){ 
  if (e.button === 0) exports.mouseLeft = false
  if (e.button === 1) exports.mouseMiddle = false
  if (e.button === 2) exports.mouseRight = false
}, false);