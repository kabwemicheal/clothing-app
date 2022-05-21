import { createContext, useState, useEffect } from "react";

import { getCollections } from "../Firebase/FirebaseUtils";

export const ProductContext = createContext({
  products: {},
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    const getData = async () => {
      const data = await getCollections("categories");
      setProducts(data);
    };
    getData();
  }, []);
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
