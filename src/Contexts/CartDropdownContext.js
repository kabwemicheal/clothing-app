import React, { createContext, useState, useEffect } from "react";

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

const removeCartItem = (cartItems, itemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartItemsCount: 0,
  setCartItemsCount: () => {},
  total: 0,
  setTotal: () => {},
});

export const CartDropdownContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  const subtractItemFromCart = (itemToSubtract) => {
    setCartItems(decrementQty(cartItems, itemToSubtract));
  };

  const removeItemFromCart = (item) => {
    setCartItems(removeCartItem(cartItems, item));
  };

  useEffect(() => {
    const newCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemsCount(newCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    );
    setTotal(total);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartItemsCount,
    subtractItemFromCart,
    removeItemFromCart,
    total,
  };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
