import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Advertisment from '../../components/Advertisment/Advertisment'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Post from '../../components/Post/Post'
const AllActivities = () => {
    const {id}=useParams();
  console.log(id)
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
        <div className="">
          <Card padding={1}>
            <div className="text-xl">All Activity</div>

            <div className="cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white font-semibold">Posts</div>
            <div className="my-2 flex flex-col gap-1">
              {/* particular post */}
              <div>
                        <Post/>
              </div>
              <div>
                        <Post/>
              </div>
            </div>
          </Card>
        </div>

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

export default AllActivities