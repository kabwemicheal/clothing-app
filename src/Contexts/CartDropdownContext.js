import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartDropdownContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
