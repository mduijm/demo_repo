var http = require('http');
http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(req.url);
      res.end();		
      }).listen(8081);
console.log('Server started on localhost:3333; press Ctrl-C to terminate...!');

