import React from 'react'

const EditInfo = () => {
  return (
   <div className="mt-8 w-full h-[350px] overflow-auto">
    <div className="w-full mb-4">
        <label htmlFor="name">Full Name</label>
        <br/>
        <input type="text" id="name"className='p-2 mt-1 w-full border-1 rounded-md'
        placeholder='Enter Full Name'/>

    </div>
    <div className="w-full mb-4">
        <label htmlFor="headline">Headline</label>
        <br/>
        <textarea className="p-2 mt-1 w-full border-1 rounded-md" cols={10} rows={3} id="headline"></textarea>
        
    </div>
    <div className="w-full mb-4">
        <label htmlFor="company">Current Company</label>
        <br/>
        <input type="text" id="company"className='p-2 mt-1 w-full border-1 rounded-md'
        placeholder='Enter Current Company'/>

    </div>
    <div className="w-full mb-4">
        <label htmlFor="location">Current Location</label>
        <br/>
        <input type="text" id="location"className='p-2 mt-1 w-full border-1 rounded-md'
        placeholder='Enter Current Location'/>

    </div>
    <div className="bg-blue-800 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">Save</div>
   </div>
  )
}

export default EditInfo