const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");
const cookiesOptions = {
  httpOnly: true,
  secure: false, //true in production
  sameSite: "Lax", //None in production
};
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwt = require("jsonwebtoken");
const NotificationModel = require("../models/notification");

exports.loginThroughGmail = async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const playload = ticket.getPayload();
    const { sub, email, name, picture } = playload;
    let UserExist = await User.findOne({ email });
    if (!UserExist) {
      UserExist = await User.create({
        googleId: sub,
        email,
        f_name: name,
        profilePic: picture,
      });
      let jwttoken = jwt.sign(
        { userId: UserExist._id },
        process.env.JWT_PRIVATE_KEY
      );
      res.cookie("token", jwttoken, cookiesOptions);
      return res.status(200).json({ user: UserExist });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
exports.register = async (req, res) => {
  try {
    console.log(req.body);
    let { f_name, email, password } = req.body;
    let isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        error:
          "Already have an account with this email. Please try with another email.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ f_name, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({
      message: "User registered successfully",
      success: "yes",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let isUserSigned = await User.findOne({ email });
    if (
      isUserSigned &&
      (await bcrypt.compare(password, isUserSigned.password))
    ) {
      let token = jwt.sign(
        { userId: isUserSigned._id },
        process.env.JWT_PRIVATE_KEY
      );
      res.cookie("token", token, cookiesOptions);
      return res.json({
        message: "Logged in successfully",
        success: "true",
        isUserSigned,
      });
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body;
    const isExist = await User.findById(req.user._id);
    if (!isExist) {
      return res.status(400).json({ error: "User doesnot exist" });
    }
    const updateData = await User.findByIdAndUpdate(isExist._id, user);
    const userData = await User.findById(req.user._id);
    res.status(200).json({
      message: "User updated successfully",
      user: userData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await User.findById(id);
    if (!isExist) {
      return res.status(400).json({ error: "No such user exist" });
    }
    return res.status(200).json({
      message: "User fetched successfully",
      user: isExist,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.logout = async (req, res) => {
  res
    .clearCookie("token", cookiesOptions)
    .json({ message: "Logged out successfully" });
};
exports.findUser = async (req, res) => {
  try {
    const { query } = req.query;
    const users = await User.find({
      $and: [
        { _id: { $ne: req.user._id } },
        {
          $or: [
            { name: { $regex: new RegExp(`^${query}`, "i") } },
            { email: { $regex: new RegExp(`^${query}`, "i") } },
          ],
        },
      ],
    });
    return res.status(201).json({
      message: "Fetched Member",
      users: users,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
exports.sendFriendReq = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { reciever } = req.body;
    const userExist = await User.findById(reciever);
    const sender = await User.findById(senderId);
    if (!userExist) {
      return res.status(400).json({
        error: "No such user exist.",
      });
    }
    const index = sender.friends.findIndex((id) => id.equals(reciever));
    if (index !== -1) {
      return res.status(400).json({
        error: "Already Friends",
      });
    }
    const lastIndex = userExist.pending_friends.findIndex((id) =>
      id.equals(senderId)
    );
    if (lastIndex !== -1) {
      return res.status(400).json({
        error: "Already Sent Request",
      });
    }
    userExist.pending_friends.push(sender._id);
    let content = `${req.user.f_name} has sent you friend Request`;
    const notification = new NotificationModel({
      sender: senderId,
      reciever,
      content,
      type: "friendRequest",
    });
    await notification.save();
    await userExist.save();
    return res.status(200).json({
      message: "Friend Request Sent",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
exports.acceptFriendReq = async (req, res) => {
  try {
    let { friendId } = req.body;
    let selfId=req.user._id;
    const selfUser=await User.findById(selfId)
    const friendData=await User.findById(friendId)
    if(!friendData){
      return res.status(400).json({
        error:"No such user exist."
      })
    }
    const index=selfUser.pending_friends.findIndex(id=>id.equals(friendId));
    if(index!==-1){
      selfUser.pending_friends.splice(index,1)
    }else{
      return res.status(400).json({
        error:"No request from such user"
      })
    }
selfUser.friends.push(friendId)
friendData.friends.push(req.user._id);
let content=`${req.user.f_name} has accepted your friend request`
const notification=new NotificationModel({
  sender:req.user._id,
  reciever:friendId,content,
  type:"friendRequest"
})
await notification.save();
await friendData.save();

await selfUser.save();
return res.status(200).json({
  message:"You both are connected now"
})
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
exports.getFriendsList=async(req,res)=>{
  try{
let friendsList=await req.user.populate("friends")
return res.status(200).json({
  friends:friendsList.friends
})
  }catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
}
exports.getPendingFriendsList=async(req,res)=>{
  try{
let friendsList=await req.user.populate("pending_friends")
return res.status(200).json({
  pendingfriends:friendsList.pending_friends
})
  }catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
}
exports.rmvFromFriend=async(req,res)=>{
  try{
    let selfId=req.user._id
const {friendId}=req.params;
const friendData=await User.findById(friendId);
if(!friendData){
  return res.status(400).json({
    error:"No such user exist."
  })
}
const index=req.user.friends.findIndex(id=>id.equals(friendId))
const friendIndex=friendData.friends.findIndex(id=>id.equals(selfId))
if(index!==-1){
req.user.friends.splice(index,1)
}else{
  return res.status(400).json({
    error:"No request from such user"
  })
}
if(friendIndex!==-1){
 friendData.friends.splice(index,1)
  }else{
    return res.status(400).json({
      error:"No request from such user"
    })
  }
  await req.user.save()
  await friendData.save()
  return res.status(200).json({
    message:"You both are now disconnected."
  })
  }catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
}