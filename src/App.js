import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import { AppContext } from './context/productsContext';

const API = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"

function App() {
 
  const [products, setProducts] = useState(null);
  
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const fetchedProducts = await res.data;
    setProducts(fetchedProducts)
  }


  useEffect(() => {
    getProducts(API);
}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
