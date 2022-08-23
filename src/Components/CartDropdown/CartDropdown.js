import { useContext } from "react";
import Button from "../Button/Button";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdownStyles.js";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length === 0 && (
          <EmptyMessage> you have no items</EmptyMessage>
        )}
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </>
      </CartItems>
      <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
