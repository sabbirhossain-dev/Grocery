import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Page from './pages/Page/Page';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Navbar from './layout/Navbar';

function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/page' element={<Page />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
      
      
{/* <Home/> */}
    </>
  );
}

export default App;
