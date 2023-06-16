const mongoose = require('mongoose')
const Student = require("../model/student")


const findUSer = async (req,res)=>{
    try{
   
    const search = await Student.find({})
    res.status(200).send(search)

}catch(error){
   res.status(500).send("something wrong "+error)
}
}

module.exports= findUSer