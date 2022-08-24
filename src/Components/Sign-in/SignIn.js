import React, { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { SignInContainer, Buttons } from "./SignInStyles.js";
import {
  signInWithGooglePopup,
  signInAuthUser,
} from "../../Firebase/FirebaseUtils";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    clearForm();
    await signInAuthUser(email, password);
  };

  const clearForm = () => {
    setCredentials({ email: "", password: "" });
  };

  const loginWithGooglePopup = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          handleChange={handleChange}
          value={credentials.email}
          type="email"
          label="email"
        />
        <FormInput
          name="password"
          handleChange={handleChange}
          value={credentials.password}
          type="password"
          label="password"
        />
        <Buttons>
          <Button type="submit">SignIn</Button>
          <Button
            buttonType="google"
            type="button"
            onClick={loginWithGooglePopup}
          >
            SignIn with Google
          </Button>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
