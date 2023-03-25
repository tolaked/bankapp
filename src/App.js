import { Route, Routes } from "react-router-dom";
import Signup from "src/screens/Signup";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import { useEffect } from "react";
import ApiService from "src/services";
import { useAuthorization } from "src/hooks";

function App() {
  useAuthorization();
  // useEffect(() => {
  // }, []);
  return (
    <Routes>
      {/*<Route path="/" element={<Signup />} />*/}
      <Route path="/signup" element={<Signup />} />
      {/*<Route path="/signup-details" element={<Signup />} />*/}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
