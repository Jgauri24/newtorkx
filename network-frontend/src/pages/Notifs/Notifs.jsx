import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Advertisment from '../../components/Advertisment/Advertisment'
import Card from '../../components/Card/Card'
import oggy from "../../assets/oggy.jpeg"
const Notifs = () => {
    return (
        <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
            {/* left */}
            <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
                <div className="h-fit">
                    <ProfileCard />
                </div>


            </div>
            {/* middle */}
            <div className="w-[100%] py-5 sm:w-[50%]">

                <Card padding={0}>
                    <div className="w-full">
                        {/* each notification */}
                        <div className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>

    <img src={oggy} alt="" className='rounded-full cursor-pointer  h-15 w-15 '/>
                            <div>Oggy has sent you friend Request</div>
                        </div>
                    </div>

                </Card>
            </div>
            {/* right */}
            <div className="w-[26%] py-5 hidden md:block">

                <div className="my-5 sticky top-19">
                    <Advertisment />
                </div>
            </div>

        </div>
    )
}

export default Notifs