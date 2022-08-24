import React, { useContext } from "react";
import CheckoutPageItem from "../../Components/CheckoutPageItem/CheckoutPageItem";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./CheckoutPageStyles.js";

const CheckoutPage = () => {
  const { cartItems, total } = useContext(CartDropdownContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckoutPageItem key={item.id} {...item} />
      ))}

      <Total>Total: ${total}</Total>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
