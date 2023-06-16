const mongoose = require("mongoose")
const validater = require("validater")


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        default:["male","female"]
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const student  = new mongoose.model("student",studentSchema)

module.exports =student