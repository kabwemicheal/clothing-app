import React from "react";
import SignIn from "../../Components/Signin/Signin";
import Signup from "../../Components/Signup/Signup";
import "./SignInSignUpPage.scss";
function SignInSignUpPage() {
  return (
    <div className="sign-in-up-pages">
      <div>
        <SignIn />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
}

export default SignInSignUpPage;
