import { createContext, useState } from "react";
import { COLLECTION_DATA } from "../Data/CollectionData";

export const ProductContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(COLLECTION_DATA);
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
