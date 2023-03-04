require("dotenv").config();
const express = require('express');
const connect = require("./config/db.js");
const server = express();
const cors = require('cors');
const { default: axios } = require("axios");
server.use(express.json());
server.use(cors());
const User=require("./user/user.modal.js")



server.get("/",async(req,res)=>{
    res.send("hello")
})
server.post("/user",async(req,res)=>{
    try{
        const user= req.body
        console.log(user)
    User.create(user)
    res.send(user)
    }
    
    catch{
        res.send("task cannot created")
    }
    
})

server.get("/user",async(req,res)=>{
    try{
      const users=await User.find()

    
    res.send(users)
    }
    
    catch{
        res.send("task cannot created")
    }
    
})
server.delete("/delete/:id",async(req,res)=>{
    try{
        const _id=req.params.id
        //const id=req.params
        //res.send(id)
      const users= await User.deleteOne({_id})
      const usersji=await User.find()
      res.send(users)

       
    
    }
    
    catch{
        res.send("task cannot created")
    }
    
})
server.listen(8080,async(req,res)=>{
   try{
    await connect();
    console.log(`Database connected`)
   }
   catch(e){
    console.log(e)
   }
   console.log(`server listening at port ${8080}`)
});