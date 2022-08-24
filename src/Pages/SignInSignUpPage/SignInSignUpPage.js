import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import Signup from "../../Components/Signup/Signup";
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
