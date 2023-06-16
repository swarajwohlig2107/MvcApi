const mongoose = require("mongoose")
require("dotenv")
const MONGO_DB_URL = process.env.MONGO_DB


const connectDb = async ()=>{
    try{
       const connect = await  mongoose.connect(`${MONGO_DB_URL}`)
        console.log("connection succsesful")
    }
    catch(error){
        console.log("connection not succesful"+error) 
    }
} 

connectDb()