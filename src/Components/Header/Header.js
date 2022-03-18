import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseUtils";
import "../Header/Header.scss";
import { AiOutlineUser } from "react-icons/ai";

function Header({ currentUser }) {
  return (
    <div className="Header">
      <div className="Header-Logo">
        <Link className="Header-Logo-Link" to="/">
          Micheals
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
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign Out
            </Link>
          </span>
        ) : (
          <Link className="Header-Link" to="/signin">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
