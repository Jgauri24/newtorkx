const express=require("express")
const app=express()
const cookieParser=require("cookie-parser")
require("./connection")
require("dotenv").config({path:"./config.env"}) || 3000
const PORT=process.env.PORT 


app.use(express.json())
  app.use(cookieParser())

const UserRoutes=require("./routes/user");
const PostRoutes=require("./routes/post");
app.use("/api/auth",UserRoutes)
app.use("/api/post",PostRoutes)
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})