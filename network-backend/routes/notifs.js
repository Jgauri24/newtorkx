const express=require("express")
const router=express.Router();
const NotifsController=require("../controllers/notifs")
const Authentication = require("../authentication/auth")

router.get("/",Authentication.auth,NotifsController.getNotification)
router.put("/isRead",Authentication.auth,NotifsController.updateRead)
router.get("/activeNotification",Authentication.auth,NotifsController.activeNotify)
module.exports= router;