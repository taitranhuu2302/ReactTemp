import React, { Component } from "react";
import Header from "./../../Components/LoginPage/HeaderLogin/Header/Header";
import Breadcumb from "../../Components/LoginPage/ContentLogin/Breadcumb/Breadcumb";
import SignInForm from "../../Components/LoginPage/ContentLogin/LoginForm.js/SignInForm";
import Footer from "./../../Components/LoginPage/FooterLogin/footer";

class LoginPage extends Component {
  render() {
    return (
      <>
        <Header match={this.props.match} />
        <Breadcumb
          match={this.props.match}
          to="/global/login"
          current="CREATE YOUR ACCOUNT"
          toBack="My Account"
        />
        <SignInForm match={this.props.match} />
        <Footer />
      </>
    );
  }
}

export default LoginPage;
