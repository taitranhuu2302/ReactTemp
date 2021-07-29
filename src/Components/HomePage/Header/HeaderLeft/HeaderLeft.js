import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import NavItem from "./NavItem";
import SubCanvas from "./SubCanvas";
import { connect } from "react-redux";

class HeaderRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCanvas: false,
    };
  }

  toggleCanvas = () => {
    this.setState({
      toggleCanvas: !this.state.toggleCanvas,
    });
  };

  onSubCanvas = (nav) => {
    var result = null;
    result = nav.map((item, index) => {
      return <SubCanvas key={index} item={item} index={index} />;
    });
    return result;
  };

  onNavItem = (nav) => {
    var result = null;
    result = nav.map((item, index) => {
      return <NavItem key={index} item={item} index={index} />;
    });
    return result;
  };

  render() {
    var { toggleCanvas } = this.state;
    var { nav } = this.props;
    return (
      <Fragment>
        <div>
          <button
            onClick={this.toggleCanvas}
            className="btn text-white fs-5 shadow-none d-block d-xl-none far fa-bars"
          ></button>
          <div
            className={
              toggleCanvas ? "menu-canvas canvas-active" : "menu-canvas"
            }
          >
            <div className="canvas-header d-flex ms-2 mb-4 align-items-center">
              <button
                onClick={this.toggleCanvas}
                className="btn text-white shadow-none canvas-close fas fa-times"
              ></button>
            </div>
            <div className="canvas-content">
              <ul className="list">{this.onSubCanvas(nav)}</ul>
            </div>
          </div>
        </div>
        <div className="navbar">
          <Link to="/" className="navbar-brand">
            <img
              src="https://www.aorus.com/assets/img/logo.acad5b52.png"
              className="logo"
              alt=""
            />
          </Link>
        </div>
        <ul className="nav h-100 d-none d-xl-flex">{this.onNavItem(nav)}</ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.navItem,
  };
};

export default connect(mapStateToProps, null)(HeaderRight);
