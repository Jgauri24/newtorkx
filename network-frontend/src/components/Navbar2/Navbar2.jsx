import React, { useState } from "react";
import logo from "../../assets/networkx.jpeg";
import profile from "../../assets/profile.jpg"
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import prof from "../../assets/profile.jpg"
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"
const Navbar2 = () => {
    const [dropdown,setDropDown]=useState(false)
    const location=useLocation()
    console.log(location)
        
  return (
    <div className="bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000">
      <div className="flex gap-2 items-center">
        <div>
          <img src={logo} alt="logo" className="w-12 h-12" />
        </div>
        <div className="relative">
            <input className="searchInput w-70 bg-gray-100 rounded-sm h-10 px-4" type="text" placeholder="search" />
           {
            dropdown &&  <div className="absolute w-88 left-0 bg-gray-200">
            <div className="flex mb-1 gap-2 iems-center cursor-pointer"> 
<div ><img className="w-10 h-10 rounded-full" src={profile} alt="profileimage" /></div>
<div className="">Tanisha</div>
            </div>
        
        </div>
           }
        </div>  
      </div>
      <div className="hidden gap-10 md:flex">
<Link to="/feeds" className="flex flex-col items-center cursor-pointer">
<HomeIcon sx={{color:location.pathname==="/feeds"?"black":"gray"}}/>
<div className={`text-sm text-gray-500 ${location.pathname==="/feeds"?"border-b-3":""}`}>Home</div>

</Link>
<Link to="/people" className="flex flex-col items-center cursor-pointer">
<PeopleAltIcon sx={{color:location.pathname==="/people"?"black":"gray"}}/>
<div className={`text-sm text-gray-500 ${location.pathname==="/people"?"border-b-3":""}`}>People</div>

</Link>
<Link to="/resume" className="flex flex-col items-center cursor-pointer">
<WorkIcon sx={{color:location.pathname==="/resume"?"black":"gray"}}/>
<div className={`text-sm text-gray-500 ${location.pathname==="/resume"?"border-b-3":""}`}>Resume</div>

</Link>
<Link to="/messages" className="flex flex-col items-center cursor-pointer">
<MessageIcon sx={{color:location.pathname==="/messages"?"black":"gray"}}/>
<div className={`text-sm text-gray-500 ${location.pathname==="/messages"?"border-b-3":""}`}>Message</div>

</Link>
<Link to="/notifications" className="flex flex-col items-center cursor-pointer">
<div><NotificationsIcon sx={{color:location.pathname==="/notifications"?"black":"gray"}}/><span className="p-1 rounded-full text-sm bg-red-700 text-white">1</span>
</div>
<div className={`text-sm text-gray-500 ${location.pathname==="/notifications"?"border-b-3":""}`}>Notification</div>

</Link>
<div className="flex flex-col items-center cursor-pointer">
<img  className="w-9 h-9 rounded-full" src={prof} alt="profileimg" />


</div>
      </div>
    </div>
  );
};

export default Navbar2;
