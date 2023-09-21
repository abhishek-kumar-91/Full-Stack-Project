const express = require("express");
const http = require("http");

const app = express();

app.get('/', (req, res)=>{
    return res.send("hello from home page")
});

app.get('/about', (req, res)=>{
    return res.send("Hello from about page")
})

app.listen(8000, ()=>{
    console.log("Server start using express js")
})
// const myServer = http.createServer(app)

// myServer.listen(9001,()=>{
//     console.log("Server started");
// })