import React from "react";
import { Link } from "react-router-dom";

import "../Menu/Menu.scss";

const MenuItem = ({ title, imageUrl, size, id }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content">
      <Link to={`/${title}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </Link>
    </div>
  </div>
);

export default MenuItem;