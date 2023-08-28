import Home from './pages/home'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import System from './api/system';
import GetOrder from './api/getOrder'
import Navbar from './components/Navbar';
import Signup from './pages/SignupForm';
import Login from './pages/LoginForm';
import { useAuthContext } from './hooks/useAuthContext';
import AddItems from './components/Additems';

function App() {

  const {user} = useAuthContext()

  return(
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={user? <Home/>:<Navigate to="/login"/>}/>
        <Route path='/order' element={<System/>}/>
        <Route path='/order/back/getorders' element={<GetOrder/>}/>
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
        <Route path='/login' element={!user ? <Login/>: <Navigate to='/'/>}/>
        <Route path='/global' element={<AddItems/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
