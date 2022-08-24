import React from "react";
import SignIn from "../../Components/Sign-in/SignIn";
import Signup from "../../Components/Sign-up/Signup";
import { SignInUpContainer } from "./SignInSignUpPageStyles.js";
function SignInSignUpPage() {
  return (
    <SignInUpContainer>
      <SignIn />
      <Signup />
    </SignInUpContainer>
  );
}

export default SignInSignUpPage;
