import React from "react";
import Button from "../Button/Button";
import "../Items/Itemscollection.scss";

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <div className="position">
      <Button>Add to cart</Button>
    </div>
  </div>
);

export default CollectionItem;
