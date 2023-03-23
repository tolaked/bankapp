import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signupdetails from "./components/Signup/Signupdetails";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signupdetails" element={<Signupdetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
