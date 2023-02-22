import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
   </Routes>
  );
}

export default App;
