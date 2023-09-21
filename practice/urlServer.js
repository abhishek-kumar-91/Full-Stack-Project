//https: => Protocol(HyperText Transfer Protocol Secure) that use SSL to secure the data
// www.google.com => domain-user friendly name of Ip address of my server
// /=> path root or root file path

//https://www.google.com/

//query parameters /about?userId=1&a=2


const http = require("http")
const fs = require("fs")
const urlServer = require("url")


const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.url} New request recieved \n`;
    const myUrl = urlServer.parse(req.url);

    fs.appendFile("./log.txt", log,  ()=>{
        switch(myUrl.pathname){
            case '/':

                res.end("home page")
                break;
            case '/about':
                const userName = myUrl.query.myname;
                res.end(`Hello ${userName}`)
                break;
            case '/contact':
                res.end("Thank u for contacting us")
                break;
            default:
                res.end("Page not found 404")

        }
    })

})

myServer.listen(9000,()=>{
    console.log("server started")
})
