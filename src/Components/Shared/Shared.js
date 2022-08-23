import { React, useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";
import "../Shared/Shared.scss";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";

const SharedPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {Object.keys(products).map((title, index) => {
        const product = products[title];
        return <CategoryPage key={index} title={title} product={product} />;
      })}
    </div>
  );
};

export default SharedPage;
