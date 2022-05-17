import React, { useContext } from "react";
import CheckoutPageItem from "../../Components/CheckoutPageItem/CheckoutPageItem";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";
import "../CheckoutPage/CheckoutPage.scss";

const CheckoutPage = () => {
  const { cartItems, total } = useContext(CartDropdownContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutPageItem key={item.id} {...item} />
      ))}

      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default CheckoutPage;
