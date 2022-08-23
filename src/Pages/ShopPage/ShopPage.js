import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../../Components/Category/Category";
import SharedPage from "../../Components/Shared/Shared";

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<SharedPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default ShopPage;
