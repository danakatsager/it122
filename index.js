const http = require("http");
http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Homepage For Homework One");
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Hi I'm Dana Kat Sager and this is my IT122 homepage");
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);