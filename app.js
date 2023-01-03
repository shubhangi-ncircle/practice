const http = require('http')
const fs = require('fs')
http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('signup.html',(err,data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
           return res.end()
        })
       
    }

}).listen(3000)

console.log('listening to the port 3000')