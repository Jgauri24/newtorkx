import Footer from "./components/Footer/Footer";
import Navbar1 from "./components/Navbar1/Navbar1";
import LandingPage from "./pages/LandingPage/LandingPage";
import {Routes,Route} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
export default function App() {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col">
      <Navbar1 />

      <Routes>
        <Route path="/" element={<main className="flex-1">
        <LandingPage />
      </main>}/>
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/login" element={<Login/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}
