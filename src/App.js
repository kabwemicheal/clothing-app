import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import SignInSignUpPage from "./Pages/SignInSignUpPage/SignInSignUpPage";
import HatsPage from "./Pages/HatsPage/HatsPage";
import MensPage from "./Pages/MensPage/MensPage";
import WomensPage from "./Pages/WomensPage/WomensPage";
import SneakersPage from "./Pages/SneakersPage/SneakersPage";
import JacketsPage from "./Pages/JacketsPage/JacketsPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInSignUpPage />} />
        <Route path="hats" element={<HatsPage />} />
        <Route path="mens" element={<MensPage />} />
        <Route path="womens" element={<WomensPage />} />
        <Route path="jackets" element={<JacketsPage />} />
        <Route path="sneakers" element={<SneakersPage />} />
        <Route path="Checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
