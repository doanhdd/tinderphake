var http = require('http');

var fs = require('fs');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type' :  'text/html'});

    var url = req.url;
    if(url == '/'){
        fs.readFile('trangchu.html',function (error,data){
            if(error == null){
                res.write(data);
                res.end();
            }else {
                res.end(error);
            }
        });
    }
}).listen(process.env.PORT || '3000');