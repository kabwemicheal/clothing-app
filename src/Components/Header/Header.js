import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseUtils";
import "../Header/Header.scss";
import { AiOutlineUser } from "react-icons/ai";
import { UserContext } from "../../Contexts/UserContext";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <div className="Header">
      <div className="Header-Logo">
        <Link className="Header-Logo-Link" to="/">
          MELMIC
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
      </div>
    </div>
  );
};

export default Header;
