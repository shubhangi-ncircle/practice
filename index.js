const express = require('express')
const fs = require('fs')
const bodyParser = require("body-parser");
var app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/signup',(req,res)=>{
    fs.readFile('signup.html',(err,data)=>{
        res.write(data)
        res.end()
    })
})

app.get('/',(req,res)=>{
    fs.readFile('login.html',(err,data)=>{
        res.write(data)
        res.end()
    })
})


app.post('/login',(req,res)=>{
    fs.readFile('user.json',(err,data)=>{
        const users = JSON.parse(data)
        const idx = users.findIndex((user)=>user.name === req.body.username)
        if(idx>=0){
            if(req.body.password === users[idx].password) res.send('Logged in...')
            else res.send('Invalid credentials...')
        }else{
            res.send('User not found...')
        }
        // mvmwmvlfhxvjcppx  nimpzmpqincinaut
        res.end()
    })
})

app.post('/signup',(req,res)=>{
    fs.readFile('user.json',(err,data)=>{
        const users = JSON.parse(data)
        const user = {name:req.body.username, password:req.body.password, id:users.length+1}
        users.push(user)
        fs.writeFile('user.json',JSON.stringify(users),(err,data)=>{
            res.send('User added...')
            if(err){
                res.send('error while adding user...')
                res.end()
            }
            res.end()
        })
        
    })
})



app.listen(3000,()=>console.log('listining to port 3000...'))