var http = require('http');
var fs = require('fs');

var port = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
	if(!responseCode){
		responseCode = 200;
	}

  fs.readFile(__dirname + path, function(err, data){
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('500 -- Internal Server Error');
	  console.log(err);
    } else {
      res.writeHead(responseCode, {'Content-Type': contentType});
      res.end(data);
    }
  });
}

http.createServer(function(req, res){
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  
  switch(path){
	  
	  case '':
		serveStaticFile(res, '/public/index.html', 'text/html');
		break;
	  
	  case '/contact':
		serveStaticFile(res, '/public/contact.html', 'text/html');
		break;
	  
	  case '/about':
		serveStaticFile(res, '/public/about.html', 'text/html');
		break;
		
	  case '/services':
		serveStaticFile(res, '/public/services.html', 'text/html');
		break;
	  
	  case '/404':
		serveStaticFile(res, '/public/404.html', 'text/html');
		break;
	  
	  case '/about.jpeg':
		serveStaticFile(res, '/public/images/about.jpeg', 'image/jpeg');
		break;
	  
	  case '/contact.jpg':
		serveStaticFile(res, '/public/images/contact.jpg', 'image/jpeg');
		break;
	  
	  case '/service.jpg':
		serveStaticFile(res, '/public/images/service.jpg', 'image/jpeg');
		break;
	  
	  case '/logo.png':
		serveStaticFile(res, '/public/images/logo.png', 'image/png');
		break;
	  
	  
	  case '/style/style.css':
	  serveStaticFile(res, '/public/style/style.css', 'text/css');
	  break;
	  
	  default:
		serveStaticFile(res, '/public/404.html', 'text/html', 404);
		break;
  }
}).listen(1337);


console.log(`Server running at http://localhost:${port}`);

