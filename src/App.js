import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Signup from "./components/Signup/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
