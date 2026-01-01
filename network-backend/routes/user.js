const express=require("express")
const router=express.Router();
const userController=require("../controllers/user")
const Authentication = require("../authentication/auth")
router.post("/register",userController.register)
router.post("/login",userController.login)
router.post("/google",userController.loginThroughGmail)
router.put("/update",Authentication.auth,userController.updateUser)
router.get("/user/:id",userController.getProfileById)
router.post("/logout",Authentication.auth,userController.logout)
router.get("/self",Authentication.auth,(req,res)=>{
    return res.status(200).json({
        user:req.user
    })
});
router.get("/findUser",Authentication.auth,userController.findUser)
router.post("/sendFriendReq",Authentication.auth,userController.sendFriendReq)
router.post('/acceptFriendRequest',Authentication.auth,userController.acceptFriendReq)
router.delete("/rmvfromFriendList/:friendId",Authentication.auth,userController.rmvFromFriend)
router.get("/friendsList",Authentication.auth,userController.getFriendsList)
router.get("/pendingfriendsList",Authentication.auth,userController.getPendingFriendsList)
module.exports=router;
