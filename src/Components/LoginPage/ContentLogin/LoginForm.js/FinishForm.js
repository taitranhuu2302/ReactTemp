import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "./../../../../Actions/index";

class FinishForm extends Component {
  componentDidMount() {
    this.props.onGetUsers();
  }
  render() {
    var { users } = this.props;
    var { email, username } = "";
    if (users.length > 0) {
      email = users[users.length - 1].email;
      username = users[users.length - 1].username;
    }

    return (
      <div className="container-fluid px-0 py-5" id="wapper-login">
        <div className="content-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white">
                  YOU'RE IN, <br /> {username}
                </h1>
                <p className="text-start text-white mt-5 font-family-Ti size-18">
                  Welcome to join GIGABYTE AORUS Membership Program. A
                  confirmation email is on its way to <br />
                  <span className="color-orange font-family-Ti">{email}</span>
                </p>
                <p className="text-start text-white mt-4 font-family-Ti size-18">
                  If you didn't receive the confirmation email, please click the
                  button below to resend it
                </p>
                <div className="text-start">
                  <button className="btn background-orange text-white">
                    RESEND EMAIL
                  </button>
                </div>
                <hr />
                <div className="text-white text-start">
                  <Link
                    to="/"
                    className="color-orange text-decoration-none font-family-Ti size-18"
                  >
                    Learn more
                  </Link>
                  <span className="font-family-Ti ">
                    {" "}
                    about GIGABYTE AORUS membership
                  </span>
                </div>
                <div className="text-start">
                  <span className="font-family-Ti text-white">
                    Already valid?
                  </span>{" "}
                  <Link
                    className="color-orange text-decoration-none"
                    to="/global/login"
                  >
                    Login Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetUsers: () => {
      dispatch(action.acGetUsersRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishForm);
