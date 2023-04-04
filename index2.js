var http=require('http')
var httpserver=http.createServer(function(request,response){
    console.log('data fired successfullyy')
    response.writeHead(200,{'content-type':'text/plain'})
    response.end('madara is god of all shinobi \n')
}).listen(8000)
console.log('httpserver at http://127.0.0.1:8000/')