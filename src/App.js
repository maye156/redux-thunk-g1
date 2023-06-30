import { useSelector } from 'react-redux';
import Home from './pages/Home.js';
import Index from './pages/Index.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Cart } from './pages/Cart.js';

function App() {
  const {totalCount} = useSelector(state => state.cart);
  return (
    <div>
    
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Index/>} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
