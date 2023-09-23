//RestFull API  also we can restAPI
//some rules of restAPI 
// client(everthing like, smartphone,pc) -------------------------> send request to server
//  client(everthing like, smartphone,pc) <------------------------- send response(json, image, html document) to client


//html send => also called SSR(Server side rendring)
//json => key values pairs store data and send data everywhere.
// 
 

const express = require("express");
const users = require("./MOCK_DATA.json")


const app = express()
const port = 8000


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


app.get('/api/users', (req, res)=>{
    return res.json(users)
})

app.get('/api/users/:id', (req,res)=>{
    const id = req.params.id;
    const user= users.find(user => user.id == id);
    return res.json(user)
})

app.post('/api/users/:id', (req, res) =>{
    //todo  create  new user
    return res.json({status: "pending"})
})

app.patch("/api/users/:id",(req, res) =>{
    return res.json({status: "pending"});
})

app.delete("/api/users/:id", (req, res) =>{
    return res.json({status: "pending"})
})

//same rout so we can combined in one

// app.route("/api/users/:id")
// .get((req,res)=>{
//     const id = Number(req.params.id);
//     const user = user.find((user)=> user.id === id);
//     return res.json(user);
// })
// .put((req, res)=>{
//     return res.send({status: "pending"})
// })
// .delete((req, res) =>{
//     return res.send({status: "pending"})
// })



app.listen(port, ()=>{
    console.log("server started")
})