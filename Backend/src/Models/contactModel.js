const { number } = require('joi')
const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobilenumber:{
        type:Number
    },
    location:{
        type:String
    }
})


const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel