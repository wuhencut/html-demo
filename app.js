let http = require ("http")
http.createServer(function(req, res){
  res.writeHead(200, {'Contetent-Type': 'text/html'})
  res.write("<head><meta charset='utf-8'></meta></head>")
  res.end("你好\n")
}).listen(9090, "127.0.0.1");
console.log('Server is running at http://127.0.0.1:9090')