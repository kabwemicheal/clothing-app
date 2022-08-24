import React from "react";
import { useContext } from "react";
import Button from "../Button/Button";
import {
  CollectionItemContainer,
  CollectionFooter,
  Position,
  Price,
  Name,
  ImageContainer,
} from "./ItemsCollectionStyles.js";
import { CartDropdownContext } from "../../Contexts/CartDropdownContext";

const CollectionItem = ({ ...product }) => {
  const { addItemToCart } = useContext(CartDropdownContext);

  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={product.imageUrl} />
      <CollectionFooter>
        <Name>{product.name}</Name>
        <Price>${product.price}</Price>
      </CollectionFooter>
      <Position>
        <Button onClick={() => addItemToCart(product)}>Add to cart</Button>
      </Position>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
