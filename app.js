 require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT
require("./db/conn")
const route_path = require("./router/route")

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(express.json());

app.use(route_path);
;

app.listen(port,()=>{
    console.log(`server runnig on port ${port}`)
})