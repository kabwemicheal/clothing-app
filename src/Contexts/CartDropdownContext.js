import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartItemsCount: 0,
  setCartItemsCount: () => {},
});

export const CartDropdownContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  useEffect(() => {
    const newCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemsCount(newCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartItemsCount,
  };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
