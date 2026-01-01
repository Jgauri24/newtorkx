const CommentModel = require("../models/comment");
const PostModel = require("../models/post");
const NotificationModel = require("../models/notification");
const postModel = require("../models/post");
exports.commentPost = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    const userId = req.user._id;

    const postExist = await PostModel.findById(postId).populate("user");
    if(!postExist){
        return res.status(400).json({error: "No such post found"})
    }
    postExist.comments=postExist.comments+1
    await postExist.save()
    const newComment=new CommentModel({user:userId,post:postId,comment})
    await newComment.save();
    const populateComment=await CommentModel.findById(newComment.id).populate("user","f_name headline profilePic");
    const content=`${req.user.f_name} has commented on your Post`;
    const notification=new NotificationModel({sender:userId,reciever:postExist.user._id,content,type:"comment",postId:postId.toString()})
    await notification.save();
    return res.status(200).json({
        message:"Commented Successfully",
        comment:populateComment
    })


  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getCommentByPostId=async(req,res)=>{
   try{ const {PostId}=req.params;
    const ispostExist=await postModel.findById(PostId)
    if(!ispostExist){
        return res.status(400).json({error: "No such post found"})
    }
    const comments=await CommentModel.find({post:PostId}).sort({createdAt:-1}).populate("user",'f_name headline profilePic');
    return res.status(201).json({
        message:"Comments fetched",
        comments:comments
    })


    }catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error", message: err.message });
      }
}