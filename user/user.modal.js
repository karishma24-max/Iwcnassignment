const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
"title":{ type: String, required: true},

"date":String,
})
const User = mongoose.model("user", UserSchema);

module.exports = User;