import { useContext } from "react";
import Button from "../Button/Button";
import "../CartDropdown/CartDropdown.scss";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <div className="empty-message">you have no items</div>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
