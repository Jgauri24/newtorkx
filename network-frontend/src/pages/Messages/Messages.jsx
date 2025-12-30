import React from "react";
import Card from "../../components/Card/Card";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Conversation from "../../components/Conversation/Conversation";
import oggy from "../../assets/oggy.jpeg";
import land from "../../assets/land.jpg";
import ImageIcon from "@mui/icons-material/Image"
import Advertisment from "../../components/Advertisment/Advertisment";
const Messages = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-4 w-full mt-5 bg-gray-100">
      <div className="w-full justify-between flex pt-5">
        {/* left side */}
        <div className="w-full md:w-[70%]">
          <Card padding={0}>
            <div className="border-b-1 border-gray-300 px-5 py-2 font-semibold text-lg">
              Messaging
            </div>
            <div className="border-b-1 border-gray-300 px-5 py-2">
              <div className="py-1 px-2 w-fit cursor-pointer hover:bg-green-900 bg-green-800 font-semi-bold flex gap-2 w-fit rounded-2xl text-white">
                Focused
                <ArrowDropDownIcon />
              </div>
            </div>
            {/* for chat */}
            <div className="w-full md:flex">
              <div className="h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-400">
                {/* for each chat */}
                <Conversation />
              </div>
              <div className="w-full md:w-[60%] border-gray-400">
                <div className="border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center">
                  <div className="">
                    <p className="text-sm font-semibold">Oggy</p>
                    <p className="text-sm text-gray-400">hi this is oggy</p>
                  </div>
                  <div>
                    <MoreHorizIcon />
                  </div>
                </div>
                <div className="h-[360px] w-full overflow-auto border-b-1 border-gray-300">
                  <div className="w-full border-b-1 border-gray-300 gap-3 p-4">
                    <img
                      src={oggy}
                      alt=""
                      className="w-16 h-15 cursor-pointer rounded-[100%]"
                    />
                    <div className="my-2">
                      <div className="text-md">Oggy</div>
                      <div className="text-sm text-gray-500">
                        hi this is oggy
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    {/* for each message */}
                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                      <div className="shrink-0">
                        <img
                          src={oggy}
                          alt=""
                          className="w-8 h-8 cursor-pointer rounded-[100%]"
                        />
                      </div>
                      <div className="mb-2 w-full">
                        <div className="text-md">Oggy</div>
                        <div className="text-sm mt-6 hover:bg-gray-200">
                          hi this is oggy
                        </div>
                        <div className="my-2">
                          <img
                            src={land}
                            alt=""
                            className="w-[240px] h-[180px] rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* typing space */}
                <div className="p-2 w-full border-b-1 border-gray-200">
                  <textarea rows={4} className="bg-gray-200 outline-0 rounded-xl text-sm w-full p-3" placeholder="write a message"></textarea>
                </div>
                <div className="p-3 flex justify-between">
                  <div>
                    <label htmlFor="msgIcon" className="cursor-pointer"><ImageIcon /></label>
                    <input id="msgIcon" type="file" className="hidden" />
                  </div>
                  <div className="px-3 py-1 cursor-pointer rounded-2xl border-1 bg-blue-900 text-white">Send</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* right side */}
        <div className=" hidden md:flex md:w-[25%]">
          <div className="sticky top-19">
            <Advertisment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
