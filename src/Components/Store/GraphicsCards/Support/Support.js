import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class Support extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 support-div">
            <div className="row m-0 p-0 box">
              <div className="col item">
                <Link to="/global/register" className="text-decoration-none">
                  <img
                    src="https://www.aorus.com/assets/img/mb.4ffdebec.svg"
                    alt=""
                  />
                  <h3 className="text-white">REGISTER PRODUCTS</h3>
                  <p className="decoration font-family-Ti">
                    Login to complete your registration
                  </p>
                </Link>
              </div>
              <div className="col item">
                <Link to="/global/register" className="text-decoration-none">
                  <img
                    src="https://www.aorus.com/assets/img/support.ea65ce49.svg"
                    alt=""
                  />
                  <h3 className="text-white">SERVICE/SUPPORT</h3>
                  <p className="decoration font-family-Ti">
                    BIOS/Driver/Manual/File download and more
                  </p>
                </Link>
              </div>
              <div className="col item">
                <img
                  src="https://www.aorus.com/assets/img/subscribe2.94fa63ee.svg"
                  alt=""
                />
                <h3 className="text-white mb-4">SUBSCRIBE</h3>
                <div className="input-form d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control rounded-0 shadow-none"
                  />
                  <button className="btn rounded-0 text-white subr">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
