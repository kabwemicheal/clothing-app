import React, { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  Value,
  RemoveButton,
  RightArrow,
  LeftArrow,
} from "./CheckoutPageItemStyles.js";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";

const CheckoutPageItem = ({ ...item }) => {
  const { addItemToCart, subtractItemFromCart, removeItemFromCart } =
    useContext(CartDropdownContext);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={item.imageUrl} alt={item.name} />
      </ImageContainer>
      <Name>{item.name}</Name>
      <Quantity>
        <LeftArrow onClick={() => subtractItemFromCart(item)} />
        <Value>{item.quantity}</Value>
        <RightArrow onClick={() => addItemToCart(item)} />
      </Quantity>
      <Price>$ {item.price}</Price>
      <RemoveButton onClick={() => removeItemFromCart(item)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutPageItem;
