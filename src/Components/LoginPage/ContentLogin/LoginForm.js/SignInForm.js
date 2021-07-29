import React, { Component } from "react";
import InputSignIn from "./InputSignIn/InputSignIn";
import "./styles.scss";
import { connect } from "react-redux";
import * as action from "./../../../../Actions/index";
import { Redirect } from "react-router";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }
  componentDidMount() {
    this.props.onGetUsers();
  }

  onChangeLogin = () => {
    this.props.onChangeLogin();
  };

  onRegister = (data) => {
    this.props.onRegister(data);
    this.setState({
      check: true,
    });
  };

  render() {
    var { changeLogin, match } = this.props;
    var { check } = this.state;
    var url = match.url;
    var slug = changeLogin ? "register" : "login";
    if (check) {
      return <Redirect to="/global/register/complete" />;
    }
    return (
      <div className="container-fluid px-0 py-5" id="wapper-login">
        <div className="content-box">
          <div className="container-fluid">
            <div className="row">
              <InputSignIn
                url={url}
                slug={slug}
                onRegister={this.onRegister}
                list={this.props.users}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    changeLogin: state.changeLogin,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onRegister: (info) => {
      dispatch(action.acRegisterRequest(info));
    },
    onGetUsers: () => {
      dispatch(action.acGetUsersRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
