import React, { Component } from "react";
import Header from "./../../Components/LoginPage/HeaderLogin/Header/Header";
import Breadcumb from "../../Components/LoginPage/ContentLogin/Breadcumb/Breadcumb";
import LoginForm from "../../Components/LoginPage/ContentLogin/LoginForm.js/LoginForm";
import Footer from "./../../Components/LoginPage/FooterLogin/footer";

class LoginPage extends Component {
  render() {
    return (
      <>
        <Header match={this.props.match} history={this.props.history} />
        <Breadcumb
          match={this.props.match}
          to="/"
          toBack="HOME"
          current="LOGIN"
        />
        <LoginForm match={this.props.match} history={this.props.history} />
        <Footer />
      </>
    );
  }
}

export default LoginPage;
