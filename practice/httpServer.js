const http = require("http")
const fs = require("fs")
const myServer = http.createServer((req, res)=>{
    console.log(req);
    res.end(fs.readFileSync("./text.txt","utf-8"))
});

myServer.listen(8000,()=>{
    console.log("server started")
})

//alway use asynchronous task becuase we have handle parallel client work on server