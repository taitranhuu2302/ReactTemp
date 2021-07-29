import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../Actions/index";
import "./styles.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rePassword: "",
      role: "admin",
      check: false,
    };
  }

  componentDidMount() {
    this.props.onGetUsers();
  }

  onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleCheck = () => {
    var { users } = this.props;
    var { email } = this.state;
    var check = true;

    if (!email) {
      check = false;
    }
    if (users.some((item) => item.email === email)) {
      check = false;
    }

    return check;
  };

  onRegister = (e) => {
    e.preventDefault();
    if (!this.handleCheck()) {
      return;
    } else {
      const user = {
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
      };
      this.props.onRegister(user);
      this.setState({ check: true });
    }
  };

  render() {
    var { check, email, password, rePassword } = this.state;
    if (check) {
      return <Redirect to="/login-admin" />;
    }

    return (
      <div className="container-fluid" id="login-form">
        <div className="login-form-content">
          <div className="row w-100">
            <div className="col">
              <img
                src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                alt=""
              />
            </div>
            <div className="col text-center form">
              <h2 className="fw-bold mb-5">Member Register</h2>
              <form action="" onSubmit={this.onRegister}>
                <div className="input-group wapper-input mb-3">
                  <i className="fas fa-envelope" />
                  <input
                    type="email"
                    className="form-control shadow-none "
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <div className="input-group wapper-input mb-3">
                  <i className="fas fa-lock" />
                  <input
                    type="password"
                    className="form-control shadow-none "
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="input-group wapper-input mb-3">
                  <i className="fas fa-lock" />
                  <input
                    type="password"
                    className="form-control shadow-none "
                    name="rePassword"
                    value={rePassword}
                    onChange={this.onChange}
                    placeholder="Re-Password"
                    id="re-password"
                  />
                </div>
                <button type="submit" className="btn btn-submit mt-4">
                  REGISTER
                </button>
                <div className="forgot-1 mt-2">
                  <span>
                    Forgot{" "}
                    <Link className="text-decoration-none" to="/login-admin">
                      Username/{" "}
                    </Link>
                    <Link className="text-decoration-none" to="/login-admin">
                      Password?
                    </Link>
                  </span>
                </div>
                <Link
                  to="/login-admin"
                  className="create-account d-block mt-5 text-decoration-none"
                >
                  I already have an account <i className="fal fa-arrow-right" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersAdmin,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onRegister: (user) => {
      dispatch(actions.acRegisterAdminRequest(user));
    },
    onGetUsers: () => {
      dispatch(actions.acGetUserAdminRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
