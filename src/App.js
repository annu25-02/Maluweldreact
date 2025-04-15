import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
