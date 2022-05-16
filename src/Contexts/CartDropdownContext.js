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

const decrementQty = (cartItems, itemToDecrement) => {
  const existingItem = cartItems.find((item) => item.id === itemToDecrement.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrement.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrement.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
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

  const subtractItemFromCart = (itemToSubtract) => {
    setCartItems(decrementQty(cartItems, itemToSubtract));
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
    subtractItemFromCart,
  };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
