import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const People = () => {
  const [text, setText] = useState("Engage in professional networking");
  const handleConnect = async () => {
    setText("Engage in professional networking");
  };
  const handleReq = async () => {
    setText("Pending Requests");
  };
  return (
    <div className="px-5 xl:px-50 py-9 flex  flex-col gap-5 w-full mt-5 bg-gray-100">
      <div className="p-4 px-10 border-1 border-gray-400 w-full flex justify-between my-5 text-xl bg-white rounded-xl">
        <div>{text}</div>
        <div className="flex gap-3">
          <div
            onClick={handleConnect}
            className={`p-1 border-1 rounded-lg border-gray-300 cursor-pointer ${
              text === "Engage in professional networking"
                ? "bg-blue-900 text-white"
                : ""
            }`}
          >
            Connections
          </div>
          <div
            onClick={handleReq}
            className={`p-1 border-1 rounded-lg border-gray-300 cursor-pointer ${
              text === "Pending Requests" ? "bg-blue-900 text-white" : ""
            }`}
          >
            Pending Requests
          </div>
        </div>
      </div>
      <div className="flex h-[80vh] w-full gap-7 flex-wrap items-start justify-center">
        <div className="md:w-[23%] h-[270px] sm:w-full">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default People;
