const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/connect")
const bcrypt = require("bcrypt")

const app = express();
const PORT = 8000;
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/user")
.then(()=>{
    console.log("database connected")
})

app.get("/home", (req, res)=>{
    UserModel.find()
    .then(result=>res.json(result))
    .catch(err=> res.json(err))
})

app.post("/registration", (req, res)=>{
    const {firstName, lastName, email, phone, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash =>{
        UserModel.create({firstName, lastName, email, phoneNo: phone, password: hash})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    })
    

})

app.post("/login", (req, res)=>{
    const {user, password} = req.body;
    
    UserModel.findOne({email: user})
    .then(users=>{
        if(users){
           bcrypt.compare(password, users.password, (err, response)=>{
            if(err){
                res.json("password is incorrect")
            }
            if( response){
                    res.json("success")
            }
           })
        }else{
            res.json("user does not exist.....")
        }
    })
})

app.listen(PORT, ()=>{
    console.log("Server started....")
})

