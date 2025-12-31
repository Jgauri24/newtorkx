const User = require("../models/user");
const bcrypt = require("bcryptjs");
const {OAuth2Client}=require("google-auth-library")
const cookiesOptions={
    httpOnly:true,
    secure:false, //true in production
    sameSite:"Lax"//None in production
}
const client=new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwt=require("jsonwebtoken");


exports.loginThroughGmail=async (req,res)=>{
    try{
const {token}=req.body;
const ticket=await client.verifyIdToken({
    idToken:token,
    audience:process.env.GOOGLE_CLIENT_ID
})
const playload=ticket.getPayload();
const {sub,email,name,picture}=playload;
let UserExist = await User.findOne({ email });
if(!UserExist){
    UserExist=await User.create({
        googleId:sub,
        email,
        f_name:name,
        profilePic:picture
    })
    let jwttoken=jwt.sign({userId:UserExist._id},process.env.JWT_PRIVATE_KEY)
        res.cookie('token',jwttoken,cookiesOptions)
    return res.status(200).json({user:UserExist})
}
    }catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
}
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
      await bcrypt.compare(password, isUserSigned.password))
     {
        let token=jwt.sign({userId:isUserSigned._id},process.env.JWT_PRIVATE_KEY)
        res.cookie('token',token,cookiesOptions)
      return res.json({message:"Logged in successfully",success:"true",isUserSigned});
    
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
exports.updateUser=async(req,res)=>{
    try{
        const {user}=req.body;
        const isExist=await User.findById(req.user._id)
        if(!isExist){
            return res.status(400).json({error:
                "User doesnot exist"
            })
        };
        const updateData=await User.findByIdAndUpdate(isExist._id,user);
        const userData=await User.findById(req.user._id);
        res.status(200).json({
            message:"User updated successfully",
            user:userData
        })
    }catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
}
exports.getProfileById=async(req,res)=>{
    try{
const {id}=req.params;
const isExist=await User.findById(id)
if(!isExist){
    return res.status(400).json({error:"No such user exist"})
}
return res.status(200).json({
    message:"User fetched successfully",
    user:isExist
})
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error", message: err.message });
    }
}

exports.logout=async(req,res)=>{
    res.clearCookie("token",cookiesOptions).json({message:"Logged out successfully"})
}