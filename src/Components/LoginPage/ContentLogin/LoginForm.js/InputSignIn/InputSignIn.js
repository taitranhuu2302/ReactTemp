import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import moment from "moment";

class InputSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {},
      err: {},
    };
  }

  onChange = (e) => {
    var { info } = this.state;
    var target = e.target;
    var name = target.name;
    var value = target.value;

    info[name] = value;

    this.setState({
      info,
    });
  };

  handleErr = () => {
    var { info } = this.state;
    var { list } = this.props;
    var err = {};
    var check = true;
    // Check Email
    if (!info.email) {
      err.email = "The Email field is required";
      check = false;
    } else if (
      info.email.lastIndexOf("@") === -1 ||
      info.email.lastIndexOf(".") === -1
    ) {
      err.email = "The Email must be a valid email address";
      check = false;
    }

    //Check NickName
    if (!info.username) {
      err.username = "The NickName field is required";
      check = false;
    } else if (info.username.indexOf(" ") >= 0) {
      err.username = "Space is not allowed";
      check = false;
    } else if (info.username.length >= 30) {
      err.username = "Nickname must be widthin 30 characters";
      check = false;
    }

    //Check Password
    if (!info.password) {
      err.password = "The Password field is required";
      check = false;
    } else if (info.password.indexOf(" ") >= 0) {
      err.password = "Space is not allowed";
      check = false;
    } else if (info.password.length < 8 || info.password.length > 20) {
      err.password = "Password must be 8 to 20 characters";
      check = false;
    }

    // Check Re-Password
    if (!info.repassword) {
      err.repassword = "The Re-Enter Password field is required";
      check = false;
    } else if (info.repassword !== info.password) {
      err.repassword = "Enter back not match password";
      check = false;
    }

    // Check account exists

    if (list.some((item) => item.email === info.email)) {
      err.email = "The Email already exists";
      check = false;
    }

    if (list.some((item) => item.username === info.username)) {
      err.username = "The NickName already exists";
      check = false;
    }

    this.setState({
      err,
    });
    return check;
  };

  onRegister = () => {
    const date = new moment();
    const dateFormat = date.format("L LTS");

    var { info } = this.state;

    var user = {
      email: info.email,
      username: info.username,
      password: info.password,
      date: dateFormat,
    };
    if (!this.handleErr()) {
      return;
    } else {
      this.props.onRegister(user);
    }
  };

  render() {
    var { err } = this.state;
    return (
      <>
        <div className="col-12 text-center">
          <h1 className="text-white">CREATE YOUR ACCOUNT</h1>
        </div>
        <div className="col-12 input-regis">
          <label className={err.email ? "regis-title" : ""} htmlFor="email">
            Email*
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className={
              err.email
                ? "w-100 form-control active-border shadow-none rounded"
                : "w-100 form-control border-0 shadow-none rounded"
            }
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            The email will be you login ID or GIGABYTE AORUS Account.
          </p>
        </div>
        <div className="col-12 input-regis">
          <label
            className={err.username ? "regis-title" : ""}
            htmlFor="username"
          >
            NickName*
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            className={
              err.username
                ? "w-100 form-control active-border shadow-none rounded"
                : "w-100 form-control border-0 shadow-none rounded"
            }
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Nickname must be widthin 30 characters
          </p>
        </div>
        <div className="col-12 input-regis">
          <label
            className={err.password ? "regis-title" : ""}
            htmlFor="password"
          >
            Password*
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            className={
              err.password
                ? "w-100 form-control active-border shadow-none rounded"
                : "w-100 form-control border-0 shadow-none rounded"
            }
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Password must be 8 to 20 characters, with a least one numeric
            character [0-9] and one letter. Space is not allowed.
          </p>
        </div>
        <div className="col-12 input-regis">
          <label
            className={err.repassword ? "regis-title" : ""}
            htmlFor="re-password"
          >
            Re-enter password*
          </label>
          <input
            type="password"
            id="re-password"
            name="repassword"
            value={this.state.repassword}
            onChange={this.onChange}
            className={
              err.repassword
                ? "w-100 form-control active-border shadow-none rounded"
                : "w-100 form-control border-0 shadow-none rounded"
            }
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Passwords must match.
          </p>
        </div>
        <div className="col-12 my-4">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-3 text-center text-sm-end">
              <div className="text-white label-in-width">Or Log in with</div>
            </div>
            <div className="col-sm-6 col-12 text-center">
              <Link to="/" className="icon text-center">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/" className="icon text-center">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/" className="icon text-center">
                <i className="fab fa-google-plus-g"></i>
              </Link>
            </div>
          </div>
        </div>
        {err.email || err.username || err.password || err.repassword ? (
          <div className="col-12 mb-4 py-2 color-orange active-border font-family-Ti">
            {err.email ? (
              <p className="font-family-Ti mb-1">{err.email}</p>
            ) : (
              ""
            )}
            {err.username ? (
              <p className="font-family-Ti mb-1">{err.username}</p>
            ) : (
              ""
            )}
            {err.password ? (
              <p className="font-family-Ti mb-1">{err.password}</p>
            ) : (
              ""
            )}

            {err.repassword ? (
              <p className="font-family-Ti mb-1">{err.repassword}</p>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-7 mt-2 text-center">
              <Link to="/global/login">
                <button className="btn shadow-none button-create w-100 text-white">
                  I'm already a member
                </button>
              </Link>
            </div>
            <div className="col-12 col-sm-5 mt-2 text-center ">
              <button
                className="btn shadow-none button-login w-100 text-white"
                onClick={this.onRegister}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InputSignIn;
