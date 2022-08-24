import React, { useContext } from "react";

import MenuItem from "../Menu/Menu";

import { DirectoryMenu } from "./DirectoryStyles.js";
import { HomePageDataContext } from "../../Contexts/HomePageContext";

const Directory = () => {
  const { products } = useContext(HomePageDataContext);
  return (
    <DirectoryMenu>
      {products.map(({ id, ...sections }) => (
        <MenuItem key={id} {...sections} />
      ))}
    </DirectoryMenu>
  );
};

export default Directory;
