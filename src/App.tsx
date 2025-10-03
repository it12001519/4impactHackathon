import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/EmployeeDashboard";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/profile" element={<Dashboard />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
