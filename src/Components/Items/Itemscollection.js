import React from "react";
import { useContext } from "react";
import Button from "../Button/Button";
import "../Items/Itemscollection.scss";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";

const CollectionItem = ({ ...product }) => {
  const { addItemToCart } = useContext(CartDropdownContext);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${product.imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{product.name}</span>
        <span className="price">${product.price}</span>
      </div>
      <div className="position">
        <Button onClick={() => addItemToCart(product)}>Add to cart</Button>
      </div>
    </div>
  );
};

export default CollectionItem;
