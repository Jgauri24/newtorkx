import React from 'react'
import landingImg from "../../assets/land.jpg"
import { Link } from 'react-router-dom'
import GoogleLoginComp from '../../components/GoogleLogin/GoogleLogin'

const LandingPage = () => {
    return (
        <div className=' my-20 py-10 md:pl-[120px] px-5 md:flex justify-between items-center gap-6'>
            <div className="md:w-[40%] flex flex-col items-center md:items-start text-center md:text-left ">
                <div className="text-3xl md:text-4xl text-gray-700">
                    Discover your perfect role and shape your future
                </div>
                <div className="mt-6  px-6 py-3 flex justify-center  rounded-3xl w-[70%] text-white cursor-pointer "><GoogleLoginComp/></div>
                <div className="mt-3 px-6 py-3 bg-white rounded-3xl flex items-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer">
                    Sign In with Email
                </div>
                <div className="text-sm w-[70%] mt-6 text-center">
                    By clicking Continue to join or sign in, you agree to <span className='text-blue-800 cursor-pointer hover:underline'>NetworkX's User Agreement</span>,<span className='text-blue-800 cursor-pointer hover:underline'> Privacy Policy</span>, and
                    <span className='text-blue-800 cursor-pointer hover:underline'> Cookie Policy</span>.
                </div>
                <Link to={"/signUp"} className="text-lg w-[70%] mt-4 text-center">
                    New here? <span className='text-blue-800 cursor-pointer hover:underline'>Join Now</span>
                </Link>

            </div>
            <div className="md:w-[50%]">
                <img src={landingImg} className="w-full h-full rounded-xl " alt="image" />
            </div>
        </div>
    )
}

export default LandingPage