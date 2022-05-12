import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "../CartIcon/CartIcon.scss";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";

const CartIcon = () => {
  const { cartItemsCount } = useContext(CartDropdownContext);
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
