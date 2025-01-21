import React from 'react'
import './App.css'
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="*" element={<div>404</div>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
