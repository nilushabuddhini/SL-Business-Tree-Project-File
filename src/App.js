import Home from './pages/home'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import System from './api/system';
import Navbar from './components/Navbar';
import Signup from './pages/SignupForm';
import Login from './pages/LoginForm';
import { useAuthContext } from './hooks/useAuthContext';
import AddItems from './components/Additems';
import { Description } from './description/itemsdes';
import { Cart } from './cart/cart';
import { MyItems } from './admin/myItems';
import Update from './admin/update';
import Edit from './admin/edit'
import Private from './admin/getMyItems';
import Search from './components/search';
import Categories from './categories/categories';
import AllCategories from './categories/allCategories';
import CreateCategory from './categories/components/createCategory';
import NotFound from './pages/notFound';

function App() {

  const {user} = useAuthContext()

  return(
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<System/>}/>
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
        <Route path='/login' element={!user ? <Login/>: <Navigate to='/'/>}/>
        <Route path='/global' element={user? <AddItems/> : <Navigate to='/'/>}/>
        <Route path='/description' element={<Description/>}/>
        <Route path='/cart' element={user?<Cart/>:<Navigate to='/login'/>}/>
        <Route path='/dashboard' element={user?<MyItems/>:<Navigate to='/login'/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/mine' element={<Private/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/category/:name' element={<Categories/>}/>
        <Route path='/categories' element={<AllCategories/>}/>
        <Route path='/create/category' element={<CreateCategory/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
