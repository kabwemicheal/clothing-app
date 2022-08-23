import React from "react";
import { BaseButton } from "./ButtonStyles.js";
const Button = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};

export default Button;
