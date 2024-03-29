import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";
import CollectionItem from "../Items/ItemsCollection";

import {
  CategoryContainer,
  CategoryGrid,
  CategoryTitle,
} from "./CategoryStyles.js";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [categoryProducts, setCategoryProducts] = useState(products[category]);

  useEffect(() => {
    setCategoryProducts(products[category]);
  }, [products, category]);

  return (
    <CategoryContainer>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryGrid>
        {categoryProducts &&
          categoryProducts.map((product, index) => (
            <CollectionItem key={index} {...product} />
          ))}
      </CategoryGrid>
    </CategoryContainer>
  );
};

export default Category;
