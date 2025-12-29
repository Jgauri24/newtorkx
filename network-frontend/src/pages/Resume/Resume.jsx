import React from 'react'
import resume from '../../assets/resume.png'
import Advertisment from '../../components/Advertisment/Advertisment'
const Resume = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
        <div className="w-[100%] py-5 sm:w[74%]">
            <img className="w-full h-full rounded-lg"src={resume}/>

           
        </div>
<div className="w-[26%] py-5 hidden md:block">
    <div className="sticky top-19">
        <Advertisment/>
    </div>
</div>
    </div>
  )
}

export default Resume