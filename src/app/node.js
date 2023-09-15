const http = require('http')

port = 3000

const server = http.createServer((req,res) =>{
    
    
    if(req.url == '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html');

        //res.end("<h1>Hello World</h1><p> <h2> Goind d</h2>")
        
         res.end("<app-home></app-home>")
    }
})

server.listen(port,() =>{
    console.log("Server IS Listenig")
})
