import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import SignInSignUpPage from "./Pages/SignInSignUpPage/SignInSignUpPage";
import CheckoutPage from "../src/Pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="signin" element={<SignInSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
