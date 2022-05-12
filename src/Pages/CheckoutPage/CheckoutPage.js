import React, { useContext } from "react";
import CheckoutPageItem from "../../Components/CheckoutPageItem/CheckoutPageItem";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";
import "../CheckoutPage/CheckoutPage.scss";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartDropdownContext);
  return (
    <div>
      {cartItems.map((item) => (
        <CheckoutPageItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CheckoutPage;
