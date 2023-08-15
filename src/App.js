import Home from './pages/home'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import System from './api/system';
import GetOrder from './api/getOrder'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<System/>}/>
        <Route path='/order/back/getorders' element={<GetOrder/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
