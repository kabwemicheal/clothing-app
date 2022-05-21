import { React, useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../Items/Itemscollection";
import { ProductContext } from "../../Contexts/ProductContext";
import "../Shared/Shared.scss";

const SharedPage = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <Fragment>
      {Object.keys(products).map((title, index) => {
        return (
          <Fragment key={index}>
            <div className="collection-preview">
              <h1 className="title">{title}</h1>
              <div className="preview">
                {products[title].map((product, index) => (
                  <CollectionItem key={index} {...product} />
                ))}
              </div>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default SharedPage;
