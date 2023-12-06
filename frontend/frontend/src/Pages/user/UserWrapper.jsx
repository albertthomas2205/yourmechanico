
import { Route,Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Background from "./Background.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import CreateUser from "./CreateUser.jsx";
import Otp from "./Otp.jsx";
import Adminhome from "./Admin/Adminhome.jsx"



function UserWrapper() {
  return (
    <> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Adminhome />} />
     
      <Route path="/b/" element={<Background />}>
        
      <Route path="/b/register" element={<CreateUser/>} />
        <Route path="/b/login" element={<Login />} />
        <Route path="/b/signup" element={<Signup />} />
        <Route path="/b/otp" element={<Otp />} />
      </Route>
      </Routes>
     
    </>
  )
}

export default UserWrapper;