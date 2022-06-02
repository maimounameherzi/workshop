const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstName : {type: String, required:true}, 
        lastName : {type: String, required:true}, 
        email : {type: String, required:true, unique: true}, 
        password : {type: String, required:true}, 
        role : {type: mongoose.Schema.Types.ObjectId, ref: "role"}, 
        createdAt : {type: Date,  default: new Date()}, 
        updatedAt : {type: Date, default: new Date()}, 
    }
)
module.exports = mongoose.model ("user", userSchema) 