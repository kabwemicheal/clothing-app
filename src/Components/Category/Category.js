import { useParams } from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";
import { useContext, useState, useEffect } from "react";
import "./Category.scss";
import CollectionItem from "../Items/Itemscollection";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [categoryProducts, setCategoryProducts] = useState(products[category]);

  useEffect(() => {
    setCategoryProducts(products[category]);
  }, [products, category]);

  return (
    <div className="container">
      <h1 className="title">{category.toUpperCase()}</h1>
      <div className="preview">
        {categoryProducts &&
          categoryProducts.map((product, index) => (
            <CollectionItem key={index} {...product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
