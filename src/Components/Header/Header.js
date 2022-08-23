import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseUtils";
import "../Header/Header.scss";
import { AiOutlineUser } from "react-icons/ai";
import { UserContext } from "../../Contexts/UserContext";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartDropdownContext);
  useEffect(() => {
    window.addEventListener("click", () => {
      if (isCartOpen) {
        setIsCartOpen(!isCartOpen);
      }
    });
  }, [isCartOpen]);
  return (
    <div className="Header">
      <div className="Header-Logo">
        <Link className="Header-Logo-Link" to="/">
          Mirrors
        </Link>
      </div>
      <div className="Header-Links">
        <Link className="Header-Link" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <span className="icon-link">
            <span className="login-user-icon">
              <AiOutlineUser />
              {currentUser.displayName}
            </span>
            <Link
              className="Header-Link"
              to="/"
              onClick={async () => {
                await auth.signOut();
                setCurrentUser(null);
              }}
            >
              Logout
            </Link>
          </span>
        ) : (
          <Link className="Header-Link" to="/signin">
            Login
          </Link>
        )}
        <span
          onClick={(e) => {
            e.stopPropagation();
            setIsCartOpen(!isCartOpen);
          }}
        >
          <CartIcon />
        </span>
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Header;
