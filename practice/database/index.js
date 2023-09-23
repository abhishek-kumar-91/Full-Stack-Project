const express = require("express")
const fs = require("fs")
const users = require("../Node/Express/MOCK_DATA.json")
const mongoose = require("mongoose")

const app = express()
const PORT = 8000

//mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/userData')
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoError", err));

//Schema for database mongodb
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName:{
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        jobTitle: {
            type: String,
        },
        gender: {
            type:String,
        },
    });

const User = mongoose.model('user', userSchema);


//middleware-plugin
app.use(express.urlencoded({extended: false}));

//Routes

app.get('/users', (req, res)=>{
    const html =
    `
    <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`)};
    </ul>
    `;
    res.send(html);
});


// app.get('/api/users', (req, res)=>{
//     return res.json(users)
// })

app.get('/api/users/:id', (req,res)=>{
    const id = req.params.id;
    const user= users.find(user => user.id == id);
    return res.json(user)
})

app.post('/api/users', async(req, res) =>{
    //todo  create  new user
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({message: "all fields are required.."});
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    console.log(result)
    return res.status(201).json({msg: "sucess"})
});

app.patch("/api/users/:id",(req, res) =>{
    return res.json({status: "pending"});
})

app.delete("/api/users/:id", (req, res) =>{
    return res.json({status: "pending"})
})

app.listen(PORT, ()=>{
    console.log("server started")
})