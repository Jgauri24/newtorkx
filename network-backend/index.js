const express=require("express")
const app=express()
require("./connection")
const PORT=3000
app.get("/",(req,res)=>{
    res.send({
        msg:"you did it1"
    })
  
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})