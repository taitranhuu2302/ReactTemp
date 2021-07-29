import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../Actions";
import "./styles.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      err: {},
      check: null,
    };
  }

  componentDidMount() {
    this.props.onGetUsers();
  }

  onChange = (e) => {
    var { info } = this.state;
    var name = e.target.name;
    var value = e.target.value;

    info[name] = value;

    this.setState({
      info,
    });
  };

  handleErr = () => {
    var { info, err } = this.state;
    var { users } = this.props;
    var check = true;

    if (!info.email) {
      err.email = "Email is required";
      check = false;
    } else err.email = "";

    if (!info.password) {
      err.password = "Password is required";
      check = false;
    } else err.password = "";

    if (
      users.every(
        (user) => user.email !== info.email || user.password !== info.password
      )
    ) {
      err.email = "Email or password is incorrect";
      check = false;
    } else err.email = "";

    this.setState({ err });

    return check;
  };

  findIndex = (item, list) => {
    var result = -1;

    list.forEach((user, index) => {
      if (user.email === item) {
        return (result = index);
      }
    });

    return result;
  };

  onLogged = (e) => {
    e.preventDefault();
    var { info } = this.state;
    var { users } = this.props;
    var index = -1;
    index = this.findIndex(info.email, users);
    if (index === -1) return;

    if (this.handleErr()) {
      this.setState({ check: users[index].id });
      localStorage.setItem("user", JSON.stringify(users[index].email));
      localStorage.setItem("uid", JSON.stringify(users[index].id));
    }
  };

  render() {
    var { err, check } = this.state;
    if (check) {
      return <Redirect to={`/admin`} />;
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
              <h2 className="fw-bold mb-5">Member Login</h2>
              <form action="" onSubmit={this.onLogged}>
                <div className="input-group wapper-input mb-3">
                  <i className="fas fa-envelope" />
                  <input
                    type="email"
                    className="form-control shadow-none "
                    name="email"
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
                    onChange={this.onChange}
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="text-danger">
                  {err.email ? <p className="m-0">{err.email}</p> : null}
                  {err.password ? <p className="m-0">{err.password}</p> : null}
                </div>
                <button type="submit" className="btn btn-submit mt-4">
                  LOGIN
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
                  to="/register-admin"
                  className="create-account d-block mt-5 text-decoration-none"
                >
                  Create your Account <i className="fal fa-arrow-right" />
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
    onGetUsers: () => {
      dispatch(actions.acGetUserAdminRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
