import React, { createContext, useState } from "react";
import { HOME_PAGE_DATA } from "../Data/CollectionData";

export const HomePageDataContext = createContext({
  products: [],
});

export const HomePageDataProvider = ({ children }) => {
  const [products] = useState(HOME_PAGE_DATA);
  const value = { products };
  return (
    <HomePageDataContext.Provider value={value}>
      {children}
    </HomePageDataContext.Provider>
  );
};
