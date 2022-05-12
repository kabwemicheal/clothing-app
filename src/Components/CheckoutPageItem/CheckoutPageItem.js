import React from "react";
import "../CheckoutPageItem/CheckoutPageItem.scss";
const CheckoutPageItem = ({ ...item }) => {
  return (
    <div className="cart-item-container" key={item.id}>
      <img src={item.imageUrl} alt={item.name} />
      <div className="cart-item-details">
        <h1>{item.name}</h1>
        <span>{item.quantity}</span>
        <span>{item.price}</span>
      </div>
    </div>
  );
};

export default CheckoutPageItem;
