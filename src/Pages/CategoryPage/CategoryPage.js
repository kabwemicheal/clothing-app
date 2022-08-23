import React from "react";
import CollectionItem from "../../Components/Items/ItemsCollection";
import { CollectionPreview, Title, Preview } from "./CategoryPageStyles.js";
import { useNavigate } from "react-router-dom";

const CategoryPage = ({ title, product }) => {
  const navigate = useNavigate();
  return (
    <CollectionPreview>
      <Title onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </Title>
      <Preview>
        {product
          .filter((_, idx) => idx < 4)
          .map((product, index) => {
            return <CollectionItem key={index} {...product} />;
          })}
      </Preview>
    </CollectionPreview>
  );
};

export default CategoryPage;
