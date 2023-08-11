import Home from './pages/home'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddItems from './components/Additems';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/u' element={<AddItems/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
