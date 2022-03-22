import { React, useContext } from "react";
import Preview from "../Preview/Preview";
import { ProductContext } from "../../Contexts/ProductContext";

const SharedPage = ({ title }) => {
  const { products, setProducts } = useContext(ProductContext);

  // if (title) {
  //   const filteredProducts = products.filter(
  //     (collection) => collection.title === title
  //   );
  //   setProducts({ products: filteredProducts });
  // }
  return (
    <div>
      {products.map(({ id, ...collections }) => (
        <Preview key={id} {...collections} />
      ))}
    </div>
  );
};

export default SharedPage;
