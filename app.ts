// const http = require('http')
// const fs = require('fs')
import {http} from 'http';
http.createServer((req:any,res:any)=>{
    if(req.url === '/'){
        fs.readFile('signup.html',(err:any,data:any)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
           return res.end()
        })
       
    }

}).listen(3000)

console.log('listening to the port 3000')