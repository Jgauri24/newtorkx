const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  f_name: {
    type: String,
    default: "",
  },
  headline: {
    type: String,
    default: "",
  },curr_company:{
    type: String,
    default: "",
  },curr_location:{
    type: String,
    default: "",
  },profilePic:{
    type: String,
    default: "data:image/jpeg;base64,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",
  }
  ,cover_pic:{
    type: String,
    default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXg4OCzs7PCwsLMzMywsLDj4+PX19e2tra4uLja2trf39/R0dG8vLzGxsa6urrU1NTK4/p6AAAB6UlEQVR4nO3b626iUBSAURFQLl7e/22HFstFLTJqgpuu9dOBxC+z5QA53WwAAAAAAAAAAAAAAAAAAAAAAAD4A/J3WDpiSpm+Q7l0xoRz9g67pTMmnLPkdQoXpXA9hS+FRigsts8pwhRun1zqt4EKnzpb4Se4Wzg7N2ZhXp3rud84ZGGeJs2NZrGb9f8YsTDfth9k9ZzEiIV1t/RXM84OWJgfuvuUesbZEQv7O7HjjDFdV+G95/iIhb9O6S6788MMWNg/TRXj46p9drgd24iF+TG796W/FpEsvUmMWLjJ632z4h/Gv7q8XURufoohC5uvXe6u70zLdnJv5jRo4R2Hy+imV5+HL/y5wKbdjc7VnEYvrA7tAlH2L3Gu5jR6YZG1S0bRBV5fT4MXnprPT1X3tHFJHK37sQtP3/9SVPUwsJnT4TGRC/PL5TM57UeB4zkNXDgezbFyeFjUwqnA5DR4pxO1cDJwOKdRC3/uvn9N7OY0aOGjwOYC27+3ilj4OLB//g9ZOLgJfTynEQtnBXZvACIW1sl+jqS9nkYsrPJZe4guR0cs/D8KP4HCaQo/wZ/Zi1Ecn9pOc4yzn+a5TVHduSEKX6FwUQrXULj2fd7r36u//r+3AAAAAAAAAAAAAAAAAAAAAAAA4F3+Acg6HdMv+TcEAAAAAElFTkSuQmCC",
  },about:{
    type: String,
    default: "",
  },skills:{
type:[String],
default:[]
  },experience:[
    {
        designation:{
            type:String
        },company_name:{
            type:String 
        },duration:{
            type:String 
        },location:{
type:String
        }
    }
  ],
  friends:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }],
  pending_friends:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }],
  resume:{
    type:"String"
  }
},{
    timestamps:true
})
;
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;


