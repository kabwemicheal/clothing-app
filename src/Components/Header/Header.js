import React, { useContext, useEffect } from "react";
import { auth } from "../../Firebase/FirebaseUtils";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLink,
  HeaderLinks,
  IconLink,
  LoginUserIcon,
} from "./HeaderStyles.js";
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
  });
  return (
    <HeaderContainer>
      <HeaderLogo to="/">Mirrors</HeaderLogo>
      <HeaderLinks>
        <HeaderLink to="/shop">Shop</HeaderLink>
        {currentUser ? (
          <IconLink>
            <LoginUserIcon>
              <AiOutlineUser />
              {currentUser.displayName}
            </LoginUserIcon>
            <HeaderLink
              to="/"
              onClick={async () => {
                await auth.signOut();
                setCurrentUser(null);
              }}
            >
              Logout
            </HeaderLink>
          </IconLink>
        ) : (
          <HeaderLink to="/signin">Login</HeaderLink>
        )}
        <span
          onClick={(e) => {
            e.stopPropagation();
            setIsCartOpen(!isCartOpen);
          }}
        >
          <CartIcon />
        </span>
      </HeaderLinks>
      {isCartOpen && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
