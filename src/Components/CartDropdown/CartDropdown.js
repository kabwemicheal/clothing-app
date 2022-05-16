import { useContext } from "react";
import Button from "../Button/Button";
import "../CartDropdown/CartDropdown.scss";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 && (
          <div className="empty-message">you have no items</div>
        )}
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
