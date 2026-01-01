const express=require("express")
const router=express.Router();
const CommentController=require("../controllers/comment")
const Authentication = require("../authentication/auth")

router.post("/",Authentication.auth,CommentController.commentPost)
// router.put("/isRead",Authentication.auth,NotifsController.updateRead)
router.get("/:PostId",CommentController.getCommentByPostId);

module.exports= router;