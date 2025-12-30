import React from 'react'

const ExpModal = () => {
  return (
    <div className="mt-8 w-full h-[350px] overflow-auto">
    <div className="w-full mb-4">
        <label htmlFor="role">Role</label>
        <br/>
        <input type="text" id="role"className='p-2 mt-1 w-full border-1 rounded-md'
        placeholder='Enter Role'/>

    </div>
    <div className="w-full mb-4">
        <label htmlFor="company">Company</label>
        <br/>
        <input type="text" id="company"className='p-2 mt-1 w-full border-1 rounded-md'
        placeholder='Enter Company Name'/>
        
    </div>
    <div className="w-full mb-4">
        <label htmlFor="duration">Duration</label>
        <br/>
        <input type="text" id="duration"className='p-2 mt-1 w-full border-1 rounded-md'
        placeholder='Duration'/>

    </div>
    <div className="w-full mb-4">
        <label htmlFor="place">Place</label>
        <br/>
        <input type="text" id="place"className='p-2 mt-1 w-full border-1 rounded-md'
        placeholder='Enter Company Location'/>

    </div>
    <div className="bg-blue-800 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">Save</div>
   </div>
  )
}

export default ExpModal