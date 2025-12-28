import React from 'react'
import logo from "../../assets/networkx.jpeg";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    return (
        <nav className='w-full bg-gray-100 md:px-[100px] px-[20px] flex justify-between items-center py-4 '>

                <div className="flex gap-1 items-center cursor-pointer">
                    <h3 className='text-blue-900 font-bold text-3xl '>
                        NetworkX
                    </h3>
                    <img src={logo} alt="logo" className="w-8 h-8" />
                </div>
          
            <div className="flex md:gap-4 gap-2 items-center">
                <Link to="/signUp" className="px-3 py-1 md:px-4 md:py-2  text-black rounded-3xl text-base md:text-xl hover:bg-gray-200 cursor-pointer">
                    Join Now
                </Link>
                <Link to="/login" className="px-3 py-1 md:px-4 md:py-2 text-blue-900 border border-blue-900 rounded-3xl text-base md:text-xl hover:bg-blue-100 cursor-pointer">
                    Sign In
                </Link>
            </div>

            
        </nav>
    )
}

export default Navbar1