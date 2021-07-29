import React, { Component } from "react";
import HeaderRight from "../HeaderRight/HeaderRight";
import HeaderLeft from "../HeaderLeft/HeaderLeft";
import "./styles.scss";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid" id="header-login">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-9 col-6 h-100 d-flex header-login">
              <HeaderLeft />
            </div>
            <div className="col-lg-3 col-6 h-100 text-end">
              <HeaderRight history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
