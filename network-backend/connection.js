const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://NetworkX:gauri12@networkx.98x2khu.mongodb.net/?appName=networkx").then(res=>
    console.log("database connected")
).catch(err=>console.log(err))
