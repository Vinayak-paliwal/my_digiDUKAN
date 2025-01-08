import React from 'react'
import './App.css'
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom' 
import Products from './components/Products';
import Product from './modules/Product';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
