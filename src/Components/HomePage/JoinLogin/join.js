import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class join extends Component {
  render() {
    return (
      <div className="container-fluid p-0" id="join-login">
        <div className="modal"></div>
        <div className="container h-100">
          <div className="join-content">
            <h1>JOIN GIGABYTE AORUS MEMBERSHIP</h1>
            <p>
              When you sign up for GIGABYTE AORUS membership, you'll instantly
              receive 10 bonus points that you can use to redeem rewards from
              your reward boutique. Get started and sign up now.
            </p>
            <div className="row">
              <div className="col-12 col-md-6 mb-3 text-md-end text-center">
                <Link
                  to="/global/register"
                  className="btn caption-btn signup rounded-0 shadow-none"
                >
                  SIGN UP
                </Link>
              </div>
              <div className="col-12 col-md-6 text-md-start text-center">
                <Link
                  to="/global/login"
                  className="btn caption-btn login rounded-0 shadow-none"
                >
                  LOG IN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default join;
