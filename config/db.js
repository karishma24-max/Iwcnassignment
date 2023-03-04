const mongoose = require("mongoose")

require("dotenv").config()
const connect = async()=>{
    return mongoose.connect("mongodb+srv://karishma:karishma@cluster0.cp6g4yl.mongodb.net/?retryWrites=true&w=majority")
}
module.exports=connect