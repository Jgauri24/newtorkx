const NotifsModal = require("../models/notification");
exports.getNotification=async(req ,res)=>{
    try{
        let ownId=req.user._id;
        let notifications=await NotifsModal.find({reciever:ownId}).sort({createdAt:-1}).populate("sender reciever");
        return res.status(200).json({
            message:"Notifications fetched Successfully",
            notifications:notifications
        })

    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error", message: err.message });
    }
}
exports.updateRead=async(req,res)=>{
    try{
const {notificationid}=req.body;
const notification=await NotifsModal.findByIdAndUpdate({notificationid,reciever: ownId},{isRead:true})
if(!notification){
    return res.status(404).json({error:"Notification not found"})
}
return res.status(200).json({
    message:"Read Notification"
})
    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error", message: err.message });
    }
}
exports.activeNotify=async(req,res)=>{
    try{
        let ownId=req.user._id;
        let notifications=await NotifsModal.find({reciever:ownId,isRead:false})
        return res.status(200).json({
            message:"Notifications Number fetched Successfully",
            notifications:notifications.length
        })

    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error", message: err.message });
    }
}

