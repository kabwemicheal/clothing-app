import React, { useContext } from "react";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./CartIconStyles.js";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";

const CartIcon = () => {
  const { cartItemsCount } = useContext(CartDropdownContext);
  return (
    <CartIconContainer>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
