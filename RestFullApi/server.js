const APP_PORT = require("./config/index")


const express = require("express");
const app = express();



app.listen(APP_PORT, ()=>{
    console.log("Server has been started....")
})