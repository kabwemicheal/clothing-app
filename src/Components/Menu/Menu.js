import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImage,
  MenuContent,
  MenuTitle,
  MenuSubtitle,
} from "./MenuStyles.js";

const MenuItem = ({ title, imageUrl, size, id }) => {
  const navigate = useNavigate();
  return (
    <MenuItemContainer size={size}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <MenuContent onClick={() => navigate(`shop/${title.toLowerCase()}`)}>
        <MenuTitle>{title.toUpperCase()}</MenuTitle>
        <MenuSubtitle>Shop now</MenuSubtitle>
      </MenuContent>
    </MenuItemContainer>
  );
};

export default MenuItem;
