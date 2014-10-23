var document = require('global/document')

exports.mouseX = 0
exports.mouseY = 0

document.addEventListener('mousemove', function(e){ 
  exports.mouseX = e.clientX || e.pageX
  exports.mouseY = e.clientY || e.pageY 
}, false);