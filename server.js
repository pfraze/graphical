var http       = require('http')
var fs         = require('fs')
var path       = require('path')
var browserify = require('browserify')

var port = 8000

var httpServer = http.createServer(onRequest);
httpServer.listen(port, '::')
console.log('listening on port', port)

function onRequest (req, res) {
  function pathStarts(v) { return req.url.indexOf(v) === 0; }
  function pathEnds(v) { return req.url.indexOf(v) === (req.url.length - v.length); }
  function type (t) { res.setHeader('Content-Type', t) }
  function resolve(file) { return path.join(__dirname, file) }
  function read(file) { return fs.createReadStream(resolve(file)); }
  function serve(file) { return read(file).on('error', serve404).pipe(res) }
  function serve404() {  res.writeHead(404); res.end('Not found'); }

  // Pages
  if (req.url == '/' || req.url == '/index.html') {
    type('text/html')
    return serve('index.html')
  }
  if (req.url == '/whiteboard.html') {
    type('text/html')
    return serve('whiteboard.html')
  }

  // JS
  if (pathStarts('/js/')) {
    var b = browserify({ basedir: __dirname })
    b.add(resolve(path.basename(req.url)))
    b.ignore('proquint-')
    b.ignore('http')
    b.ignore('level')
    b.ignore('level/sublevel')
    b.ignore('level-sublevel/bytewise')
    b.ignore('pull-level')
    type('application/javascript')
    b.bundle()
      .on('error', function(err) {
        console.error(err.toString())
        serve404()
      })
      .pipe(res)
    return
  }

  // Static asset routes
  if (pathEnds('jpg'))        type('image/jpeg')
  else if (pathEnds('jpeg'))  type('image/jpeg')
  else if (pathEnds('gif'))   type('image/gif')
  else if (pathEnds('ico'))   type('image/x-icon');
  else if (pathEnds('png'))   type('image/png');
  else if (pathEnds('woff'))  type('application/x-font-woff')
  else if (pathEnds('woff2')) type('application/font-woff2')
  if (pathStarts('/img/') || pathStarts('/fonts/'))
    return serve(req.url)
  serve404();
}