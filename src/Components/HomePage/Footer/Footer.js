import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { connect } from "react-redux";

class Footer extends Component {
  renderIcon = (list) => {
    var result = null;

    result = list.map((item, index) => {
      return (
        <Link key={index} to={item.to}>
          {item.item}
        </Link>
      );
    });

    return result;
  };

  renderSub = (list) => {
    var result = null;

    result = list.map((item, index) => {
      return (
        <li key={index} className="nav-item">
          <Link to={item.to} className="nav-link ps-0  ">
            {item.label}
          </Link>
        </li>
      );
    });
    return result;
  };

  renderList = (nav) => {
    var result = null;

    result = nav.map((item, index) => {
      return (
        <div key={index} className="col">
          <div className="h5 text-white text-center text-md-start">
            {item.navItem}
          </div>
          <ul className="nav flex-column justify-content-md-start text-md-start text-center ">
            {this.renderSub(item.list)}
          </ul>
        </div>
      );
    });

    return result;
  };

  render() {
    var { nav } = this.props;
    return (
      <div className="container-fluid px-0 pt-4" id="footer-home">
        <div className="container pb-3">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="https://www.aorus.com/assets/img/logo_svg.2fc451ee.svg"
                alt=""
              />
            </div>
            <div className="col-12 my-3 size-18 text-white text-center glitch">
              TEAM UP. FIGHT ON.
            </div>
            <div className="col-12 text-center">
              {this.renderIcon(listIcon)}
            </div>
          </div>
          <div className="row list-nav row-cols-1 row-cols-md-5 mt-5 px-5 ">
            <div className="col">
              <div className="h5 text-white text-center text-md-start">
                ABOUT US
              </div>
              <ul className="nav flex-column justify-content-md-start text-md-start text-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link ps-0">
                    About AROUS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link ps-0">
                    About GIGABYTE
                  </Link>
                </li>
              </ul>
            </div>
            {this.renderList(nav)}
          </div>
        </div>
        <div className="copy-right container-fluid p-0">
          <div className="container h-100">
            <ul className="nav h-100 align-items-center">
              <li className="nav-item">
                <Link to="/" className="nav-link font-family-Ti">
                  ©2021 GIGA-BYTE Technology Co., Ltd. All Rights Reserved.
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link font-family-Ti">
                  Terms Of Use
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link font-family-Ti">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="color-bottom"></div>
      </div>
    );
  }
}

const listIcon = [
  {
    to: "/",
    item: <i className=" fab fa-facebook-f" />,
  },
  {
    to: "/",

    item: <i className="fab fa-twitter" />,
  },
  {
    to: "/",

    item: <i className="fab fa-youtube" />,
  },
  {
    to: "/",

    item: <i className="fab fa-instagram" />,
  },
];

const mapStateToProps = (state) => {
  return {
    nav: state.navItem,
  };
};

export default connect(mapStateToProps, null)(Footer);
