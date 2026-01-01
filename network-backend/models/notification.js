const mongoose = require("mongoose");

const NotifSchema= new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    reciever:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },content:{
        type:String,
        required:true,

    },type:{
        type:String,
        required:true,
        enum:["friendRequest","comment"]
    }
    ,isRead:{
        type:Boolean,
        default:false
    },postId:{
         type:String,
        default:""
    }

},{timestamps:true})

const NotificationModel=mongoose.model("notification",NotifSchema);
module.exports=NotificationModel;