import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import NewCandidateForm from "./components/NewCandidateForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/profile" element={<EmployeeDashboard />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
          <Route path="/new-candidate" element={<NewCandidateForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
