import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Advertisment from "../../components/Advertisment/Advertisment";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from "../../components/Card/Card";
import profile from "../../assets/profile.jpg";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import Post from "../../components/Post/Post"
import AddIcon from "@mui/icons-material/Add"
import Modal from "../../components/Modal/Modal";
import ImgModal from "../../components/ImgModal/ImgModal";
import EditInfo from "../../components/EditInfo/EditInfo";
import AboutModal from "../../components/AboutModal/AboutModal";
import ExpModal from "../../components/ExpModal/ExpModal";
import MsgModal from "../../components/MsgModal/MsgModal";

const Profile = () => {
  const { id } = useParams();
  const [imgModal, setImgModal] = useState(false)
  const [circleImg, setCircleImg] = useState(true)
  const [infoModal, setInfoModal] = useState(false)
  const [aboutModal, setAboutModal] = useState(false)
  const [expModal, setExpModal] = useState(false)
  const [msgModal, setMsgModal] = useState(false)
  const handleMsgModal = () => {
    setMsgModal(prev => !prev)
  }
  const handleInfoModal = () => {
    setInfoModal(prev => !prev)
  }
  const handleImgModalOpenClose = () => {
    setImgModal(prev => !prev)
  }
  const handleAbout = () => {
    setAboutModal(prev => !prev)
  }
  const handleExpModal = () => {
    setExpModal(prev => !prev)
  }

  const handleOnEditCvr = () => {
    setImgModal(true)
    setCircleImg(false)
  }
  const handleCircleImgOpen = () => {
    setImgModal(true)
    setCircleImg(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-5 pt-20 pb-8 w-full bg-gray-100">
      <div className="flex justify-between">
        {/* left side main */}
        <div className="w-full md:w-[70%]">
          <div>
            <Card padding={0}>
              <div className="w-full h-fit">
                <div className="relative w-full h-[200px]">
                  <div onClick={() => handleOnEditCvr()} className="absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white">
                    <EditIcon />
                  </div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="w-full h-[200px] rounded-tr-lg rounded-tl-lg"
                  />
                  <div onClick={handleCircleImgOpen} className="absolute object-cover top-24 left-6 z-10">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-full border-2 border-white cursor-pointer w-35 h-35"
                    />
                  </div>
                </div>

                <div className="m-10 relative py-2">
                  <div onClick={handleInfoModal} className="absolute cursor-pointer top-0 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white">
                    <EditIcon />
                  </div>
                  <div className="w-full">
                    <div className="text-2xl">User 1</div>
                    <div className="text-gray-700">I am a dancer yay</div>
                    <div className="text-sm text-gray-500">Delhi, India</div>
                    <div className="text-md text-blue-800 w-fit cursor-pointer hover:underline">
                      2 connections
                    </div>
                    <div className="md:flex w-full justify-between">
                      <div className="my-5 flex gap-4">
                        <div className="cursor-pointer p-1 border-2 text-blue-800 rounded-lg font-semibold">
                          Open to
                        </div>
                        <div className="cursor-pointer p-1 border-2 text-blue-800 rounded-lg font-semibold">
                          <SendIcon sx={{ color: "blue-800" }} /> Profile
                        </div>
                        <div className="cursor-pointer p-1 border-2 text-blue-800 rounded-lg font-semibold">
                          Logout
                        </div>
                      </div>
                      <div className="my-5 flex gap-4">
                        <div onClick={handleMsgModal} className="cursor-pointer p-1 border-2 text-blue-800 rounded-lg font-semibold">
                          Message
                        </div>
                        <div className="cursor-pointer p-1 border-2 text-blue-800 rounded-lg font-semibold">
                          Disconnect
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-5">
            <Card padding={1}>
              <div className=" flex justify-between items-center">
                <div className="text-xl">About</div>

                <div onClick={handleAbout} className="cursor-pointer ">
                  <EditIcon />
                </div>
              </div>
              <div className="text-gray-700 text-md w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </div>

            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex  justify-between items-center ">
                <div className="text-xl">Skills</div>
              </div>
              <div className="text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap">
                <div className="cursor-pointer p-1 border-1 text-blue-800 rounded-lg font-semibold">
                  NodeJS
                </div>
                <div className="cursor-pointer p-1 border-1 text-blue-800 rounded-lg font-semibold">
                  Express
                </div>
                <div className="cursor-pointer p-1 border-1 text-blue-800 rounded-lg font-semibold">
                  JavaScript
                </div>
              </div>

            </Card>

          </div>
          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Activities</div>
              </div>
              <div className="cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white font-semibold">Posts</div>
              {/* parent div for scrollable activity */}
              <div className="overflow-x-auto my-2 flex gap-1 overflow-y-hidden w-full">
                <Link to={`profile/${id}/activities/111`} className="cursor-pointer shrink-0 w-[350px] h-[550px]">
                  <Post prof={1} />

                </Link>
                <Link to={`profile/${id}/activities/112`} className="cursor-pointer shrink-0 w-[350px] h-[550px]">
                  <Post prof={1} />

                </Link>
                <Link to={`profile/${id}/activities/113`} className="cursor-pointer shrink-0 w-[350px] h-[550px]">
                  <Post prof={1} />

                </Link>
              </div>
              <div className="w-full flex justify-center items-center">
                <Link to={`/profile/${id}/activities`} className="p-2 rounded-xl cursor-pointer hover:bg-gray-300">Show All Posts<ArrowRightAltIcon /></Link>
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex  justify-between items-center">
                <div className="text-xl">Experiences</div>

                <div className="cursor-pointer" onClick={handleExpModal}><AddIcon /></div>
              </div>
              <div className="mt-5">
                <div className="p-2 border-t-1 border-gray-300 flex justify-between">
                  <div>
                    <div className="text-lg">DSE Engineer | Full Stack Engineer</div>
                    <div className="text-sm">Amazon</div>
                    <div className="text-sm text-gray-500">March 2022, Present</div>
                    <div className="text-sm text-gray-500">Delhi, India</div>
                  </div>

                  <div className="cursor-pointer"><EditIcon /></div>
                </div>
              </div>

            </Card>

          </div>

        </div>

        {/* right side */}
        <div className="hidden md:flex md:w-[28%]">
          <div className="sticky top-19">
            <Advertisment />
          </div>
        </div>
      </div>
      {imgModal && <Modal title="Upload Image" closeModal={handleImgModalOpenClose}>
        <ImgModal isCircle={circleImg} />
      </Modal>}
      {
        infoModal &&
        <Modal title="Edit Info" closeModal={handleInfoModal}>
          <EditInfo />
        </Modal>

      }
      {
        aboutModal && <Modal title="Edit About" closeModal={handleAbout}>
          <AboutModal />
        </Modal>
      }
      {
        expModal && <Modal title="Add Experiences" closeModal={handleExpModal}>
          <ExpModal />
        </Modal>
      }
      {
        msgModal && <Modal title="Send Message" closeModal={handleMsgModal}>
          <MsgModal />
        </Modal>
      }
    </div>
  );
};

export default Profile;
