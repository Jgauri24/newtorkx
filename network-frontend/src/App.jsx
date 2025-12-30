import Footer from "./components/Footer/Footer";
import Navbar1 from "./components/Navbar1/Navbar1";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import Navbar2 from "./components/Navbar2/Navbar2";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import People from "./pages/People/People";
import Resume from "./pages/Resume/Resume";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";
import AllActivities from "./pages/AllActivities/AllActivities";
import SingleActivity from "./pages/SingleActivity/SingleActivity";
import Notifs from "./pages/Notifs/Notifs";
export default function App() {
  const isLogin = true;
  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col">
      {isLogin ? <Navbar2 /> : <Navbar1 />}
      <main className="flex-1">
        <Routes>

          <Route path="/" element={
            <LandingPage />}
          />
          <Route path="/signUp" element={
            <SignUp />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/feeds" element={<Feed />} />
          <Route path="/people" element={<People />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/activities" element={<AllActivities />} />
          <Route path="/profile/:id/activities/:postId" element={<SingleActivity />} />
          <Route path="/notifications" element={<Notifs />} />

        </Routes>
      </main>


      <Footer />

    </div>
  );
}
