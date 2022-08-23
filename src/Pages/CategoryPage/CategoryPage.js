import React from "react";
import CollectionItem from "../../Components/Items/Itemscollection";
import "../CategoryPage/CategoryPage.scss";
import { useNavigate } from "react-router-dom";

const CategoryPage = ({ title, product }) => {
  const navigate = useNavigate();
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {product
          .filter((_, idx) => idx < 4)
          .map((product, index) => {
            return <CollectionItem key={index} {...product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPage;
