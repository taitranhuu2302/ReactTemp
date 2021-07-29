import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class InputLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err: {},
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleErr = () => {
    var { email, password, err } = this.state;
    var users = this.props.users;
    var check = true;

    if (!password) {
      err.password = "Password field is required";
      check = false;
    }

    if (!email) {
      err.email = "Email field is required";
      check = false;
    }

    if (
      users.every((item) => item.email !== email || item.password !== password)
    ) {
      err.email = "Email or password is incorrect";
      this.setState({ password: "" });
      check = false;
    }

    this.setState({
      err,
    });
    return check;
  };

  onLogged = () => {
    var { email, err } = this.state;
    var { users } = this.props;
    var index = users.findIndex((user) => user.email === email);
    var usered = localStorage.getItem("username") ? true : false;
    if (usered) {
      err.exits = "You are logged in";
      this.setState({
        err,
      });
      return;
    }
    if (this.handleErr()) {
      this.props.history.push("/");
      this.props.onLogged(users[index].id);
    }
  };

  render() {
    var { err } = this.state;
    return (
      <>
        <div className="col-12 text-center">
          <h1 className="text-white">LOG IN</h1>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className="w-100 form-control border-0 shadow-none rounded"
          />
        </div>
        <div className="col-12">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            className="w-100 form-control border-0 shadow-none rounded"
          />
        </div>
        <div className="col-12 mt-1">
          <Link to="/login" className="forgot">
            Forgot Password ?
          </Link>
        </div>
        <div className="col-12 mt-4">
          <div className="form-check d-flex align-items-center p-0">
            <input type="checkbox" name="" className="me-2" id="checkbox" />
            <label htmlFor="checkbox" className="text-white">
              Remember Me
            </label>
          </div>
        </div>
        <div className="col-12 my-4">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-3 text-center text-sm-end">
              <div className="text-white label-in-width">Or Log in with</div>
            </div>
            <div className="col-sm-6 mb-3 col-12 text-center text-sm-start">
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
        {err.email || err.password || err.exits ? (
          <div className="col-12 mb-4 py-2 color-orange active-border font-family-Ti">
            {err.exits ? (
              <p className="font-family-Ti mb-1">{err.exits}</p>
            ) : (
              ""
            )}
            {err.email ? (
              <p className="font-family-Ti mb-1">{err.email}</p>
            ) : (
              ""
            )}
            {err.password ? (
              <p className="font-family-Ti mb-1">{err.password}</p>
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
              <Link to="/global/register">
                <button className="btn shadow-none button-create w-100 text-white">
                  Create An Account
                </button>
              </Link>
            </div>
            <div className="col-12 col-sm-5 mt-2 text-center ">
              <button
                className="btn shadow-none button-login w-100 text-white"
                onClick={this.onLogged}
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InputLogin;
