//http methods
// 1. Get => When you want to get some data from the server
// 2. POST => When you want to send and mutate(also called data change) some data in server
// 3. PUT  => File upload and photo upload on server
// 4. PATCH => some changes in database like name rename and so on.
// 5. DELETE => Delete data from database


const http = require("http")
const fs = require("fs")
const urlServer = require("url")


const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.method} New request recieved \n`;
    const myUrl = urlServer.parse(req.url);

    fs.appendFile("./log.txt", log,  ()=>{
        switch(myUrl.pathname){
            case '/':

                if(req.method === 'GET'){
                    res.end("home page")
                }
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
