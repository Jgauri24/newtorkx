import Footer from "./components/Footer/Footer";
import Navbar1 from "./components/Navbar1/Navbar1";
import LandingPage from "./pages/LandingPage/LandingPage";
import {Routes,Route} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import Navbar2 from "./components/Navbar2/Navbar2";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import People from "./pages/People/People";

export default function App() {
  const isLogin = true;
  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col">
      {isLogin?<Navbar2/>:<Navbar1/>}

      <Routes>
        <Route path="/" element={<main className="flex-1">
        <LandingPage />
      </main>}/>
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/feeds" element={<Feed/>}/>
      <Route path="/people" element={<People/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}
