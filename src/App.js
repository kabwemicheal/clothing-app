import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage'
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import SignInSignUpPage from "./Pages/SignInSignUpPage/SignInSignUpPage";
import { auth } from "./Firebase/FirebaseUtils";
import HatsPage from "./Pages/HatsPage/HatsPage";
import MensPage from "./Pages/MensPage/MensPage";
import WomensPage from "./Pages/WomensPage/WomensPage";
import SneakersPage from "./Pages/SneakersPage/SneakersPage";
import JacketsPage from "./Pages/JacketsPage/JacketsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="signin" element={<SignInSignUpPage />} />
              <Route path="hats" element={ <HatsPage />} />
              <Route path="mens" element={<MensPage />} />
              <Route path="womens" element={<WomensPage /> }/>
              <Route path="jackets" element={<JacketsPage />} />
              <Route path="sneakers" element={<SneakersPage /> }/>
          </Routes>
      </div>
    );
  }
}

export default App;
