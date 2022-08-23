import React from "react";
import { Group, FormInputField, FormInputLabel } from "./FormInputStyles.js";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <Group>
      <FormInputField onChange={handleChange} {...props} />
      {label ? <FormInputLabel {...props}>{label}</FormInputLabel> : null}
    </Group>
  );
};

export default FormInput;
