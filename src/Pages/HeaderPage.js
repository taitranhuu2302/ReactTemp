import React, { Component } from "react";
import Header from "./../Components/HomePage/Header/Header/Header";

class HeaderPage extends Component {
  render() {
    return (
      <>
        <Header history={this.props.history} />
      </>
    );
  }
}

export default HeaderPage;
