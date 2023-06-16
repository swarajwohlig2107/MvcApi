const mongoose = require('mongoose')
const Student = require("../model/student")

const deleteUser = async (req,res)=>{
    try{
        const _id = req.params.id
        const data = await Student.findByIdAndDelete(_id)
        console.log(data)
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).send(error)
    }
}
module.exports = deleteUser