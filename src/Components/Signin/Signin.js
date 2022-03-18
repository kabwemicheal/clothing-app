import React, { Component } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./Signin.scss";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUser,
} from "../../Firebase/FirebaseUtils";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    await signInAuthUser(email, password);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({ email: "", password: "" });
  };

  loginWithGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with you email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            type="email"
            label="email"
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            type="password"
            label="password"
          />
          <div className="buttons">
            <Button type="submit">SignIn </Button>
            <Button type="button" onClick={this.loginWithGooglePopup}>
              SignIn with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
