import React from 'react'
import logo from "../../assets/networkx.jpeg"
const Footer = () => {
  return (
    <div className='w-full bg-gray-200 flex justify-center'>
      <div className="w-full max-w-6xl px-4 md:px-10 flex flex-col items-center py-4">
        <div className="flex gap-1 items-center cursor-pointer">
          <h3 className='text-blue-800 font-bold text-xl'>
            Networked
          </h3>
          <img src={logo} alt="logo" className='w-10 h-10' />
        </div>
        <div className="text-sm text-gray-600 mt-1">@2026</div>
      </div>

    </div>
  )
}

export default Footer