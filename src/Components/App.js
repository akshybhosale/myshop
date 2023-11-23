import React from "react";

import Navbar from "../Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignUp from "../Pages/LoginSignUp";
import ShopCategory from "../Pages/ShopCategory";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import Shop from "../Pages/Shop";
import Footer from "../Components/Footer/Footer";
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kid_banner from './Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/myshop" element={<Shop/>} />
        <Route path="/myshop/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/myshop/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/myshop/kids" element={<ShopCategory  banner={kid_banner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/myshop/login" element={<LoginSignUp />}/>
        <Route path="/myshop/cart" element={<Cart />}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
