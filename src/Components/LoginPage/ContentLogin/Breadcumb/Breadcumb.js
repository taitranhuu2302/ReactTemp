import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { connect } from "react-redux";
import * as action from "./../../../../Actions/index";

class Breadcumb extends Component {
  onChangeLogin = () => {
    this.props.onChangeLogin();
  };

  render() {
    var { to, current, toBack, to1, toBack1, bgr } = this.props;
    return (
      <div
        className={bgr ? `container-fluid ${bgr}` : "container-fluid"}
        id="breadcumb"
      >
        <div className="container h-100">
          <nav aria-label="breadcrumb" className="h-100">
            <ol className="breadcrumb h-100 align-items-center d-flex">
              <li className="breadcrumb-item">
                <Link to={to}>{toBack}</Link>
              </li>
              {toBack1 ? (
                <li className="breadcrumb-item">
                  <Link to={to1}>{toBack1}</Link>
                </li>
              ) : null}
              <li className="breadcrumb-item active" aria-current="page">
                {current}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    changeLogin: state.changeLogin,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeLogin: () => {
      dispatch(action.onChangeLogin());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcumb);
