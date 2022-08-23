import { React, useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";

const SharedPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      {Object.keys(products).map((title, index) => {
        const product = products[title];
        return <CategoryPage key={index} title={title} product={product} />;
      })}
    </>
  );
};

export default SharedPage;
