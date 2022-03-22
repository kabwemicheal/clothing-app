import { React, useContext } from "react";

import MenuItem from "../Menu/Menu";

import "../Directory/Directory.scss";
import { HomePageDataContext } from "../../Contexts/HomePageContext";

const Directory = () => {
  const { products } = useContext(HomePageDataContext);
  return (
    <div className="directory-menu">
      {products.map(({ id, ...sections }) => (
        <MenuItem key={id} {...sections} />
      ))}
    </div>
  );
};

export default Directory;
