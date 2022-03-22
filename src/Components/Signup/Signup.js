import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../Firebase/FirebaseUtils";
import "./Signup.scss";

const Signup = () => {
  const formFields = {
    displayName: "",
    email: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(formFields);

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const resetForm = () => {
    setCredentials(formFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password } = credentials;
    try {
      resetForm();
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          console.log("email already in use");
          break;
        case "auth/weak-password":
          console.log("weak password");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="sign-up">
      <h2>Don't have an account ? </h2>
      <span>sign up with you credentials</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          handleChange={handleChange}
          value={credentials["displayName"]}
          type="text"
          label="display name"
        />
        <FormInput
          name="email"
          handleChange={handleChange}
          value={credentials["email"]}
          type="email"
          label="email"
        />
        <FormInput
          name="password"
          handleChange={handleChange}
          value={credentials["password"]}
          type="password"
          label="password"
        />
        <div className="buttons">
          <Button type="submit">SIGN UP </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
