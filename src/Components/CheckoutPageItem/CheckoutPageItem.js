import React, { useContext } from "react";
import "../CheckoutPageItem/CheckoutPageItem.scss";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";

const CheckoutPageItem = ({ ...item }) => {
  const { addItemToCart, subtractItemFromCart } =
    useContext(CartDropdownContext);
  return (
    <div className="cart-item-container">
      <img src={item.imageUrl} alt={item.name} />
      <div className="cart-item-details">
        <h1>{item.name}</h1>
        <span onClick={() => addItemToCart(item)}>increment</span>
        <span>{item.quantity} X </span>
        <span>${item.price}</span>
        <span onClick={() => subtractItemFromCart(item)}>decrement</span>
      </div>
    </div>
  );
};

export default CheckoutPageItem;
