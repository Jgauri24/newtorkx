const express=require("express")
const router=express.Router();
const userController=require("../controllers/user")
const Authentication = require("../authentication/auth")
router.post("/register",userController.register)
router.post("/login",userController.login)
router.post("/google",userController.loginThroughGmail)

router.get("/self",Authentication.auth,(req,res)=>{
    console.log(req.user)
})
module.exports=router;
