import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { connect } from "react-redux";
import "./styles.scss";

class HeaderLeft extends Component {
  renderNavItem = (nav) => {
    var result = null;

    result = nav.map((item, index) => {
      return <NavItem item={item} key={index} />;
    });

    return result;
  };

  render() {
    var { nav } = this.props;
    return (
      <Fragment>
        <div className="navbar">
          <Link to="/" className="navbar-brand">
            <img
              src="https://www.aorus.com/assets/img/logo.acad5b52.png"
              className="logo"
              alt=""
            />
          </Link>
        </div>
        <ul className="nav nav-menu h-100 d-none d-lg-flex">
          {this.renderNavItem(nav)}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.navItem,
  };
};

export default connect(mapStateToProps, null)(HeaderLeft);
