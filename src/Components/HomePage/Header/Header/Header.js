import React, { Component } from "react";
import HeaderLeft from "../HeaderLeft/HeaderLeft";
import HeaderRight from "./../HeaderRight/HeaderRight";
import "./styles.scss";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid" id="header">
        <div className="container header-content">
          <div className="row h-100 align-items-center ">
            <div className="col-xl-9 col-8 header-left h-100 d-flex align-items-center">
              <HeaderLeft />
            </div>
            <div className="col-xl-3 col-4 header-right text-end">
              <HeaderRight history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
