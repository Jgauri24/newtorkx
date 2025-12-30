import React from "react";
import { useParams } from "react-router-dom";
import Advertisment from "../../components/Advertisment/Advertisment";
import Post from "../../components/Post/Post";
import Card from "../../components/Card/Card";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
const SingleActivity = () => {
  const { id } = useParams();
  console.log(id);
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


        {/* particular post */}
        <div>
          <Post />
        </div>
      </div>
      {/* right */}
      <div className="w-[26%] py-5 hidden md:block">
        <div className="my-5 sticky top-19">
          <Advertisment />
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;
