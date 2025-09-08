import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/EmployeeDashboard'
import Login from './components/Login';


function App(){
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/profile' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </>  
}

export default App;