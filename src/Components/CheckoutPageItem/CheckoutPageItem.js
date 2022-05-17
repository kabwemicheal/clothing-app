import React, { useContext } from "react";
import "../CheckoutPageItem/CheckoutPageItem.scss";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CheckoutPageItem = ({ ...item }) => {
  const { addItemToCart, subtractItemFromCart, removeItemFromCart } =
    useContext(CartDropdownContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <span className="name">{item.name}</span>

      <span className="quantity">
        <FaChevronLeft
          className="arrow"
          onClick={() => subtractItemFromCart(item)}
        />
        <span className="value">{item.quantity}</span>
        <FaChevronRight className="arrow" onClick={() => addItemToCart(item)} />
      </span>

      <span className="price">${item.price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutPageItem;
