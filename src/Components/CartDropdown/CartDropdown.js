import { useContext } from "react";
import Button from "../Button/Button";
import "../CartDropdown/CartDropdown.scss";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";
import CartItem from "../CartItem/CartItem";
import CheckoutPage from "../../Pages/CheckoutPage/CheckoutPage";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
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

      <Link to="/checkout">
        <Button>Go to checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
