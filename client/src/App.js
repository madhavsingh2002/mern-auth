
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProtectedRoutes from './Services/ProtectedRoutes';
import ForgetPassword from './Pages/ForgetPassword';
import ChangePassword from './Pages/ChangePassword';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reset-password" element={<ForgetPassword />} />
          <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
