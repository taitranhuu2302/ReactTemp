import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../Actions";
import "./styles.scss";
import callApi from "../../../utils/apiCaller";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      dob: "",
      phone: "",
      role: "",
      avatar: null,
      srcImage: null,
      check: null,
    };
    this.fileRef = React.createRef();
  }

  componentDidMount() {
    this.props.onGetUsers();
    var id = JSON.parse(localStorage.getItem("uid"));
    if (id !== -1) {
      callApi(`usersAdmin/${id}`, "GET", null).then((res) => {
        var user = res.data;
        this.setState({
          lastName: user.lastName,
          firstName: user.firstName,
          avatar: user.avatar,
          srcImage: user.avatar,
          address: user.address,
          role: user.role,
          dob: user.dob,
          phone: user.phone,
        });
      });
    }
  }

  onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
      [name]: value,
    });
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

  onPostAvatar = (e) => {
    var file = e.target.files[0];
    var fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onloadend = () => {
      this.setState({
        srcImage: fr.result,
        avatar: fr.result,
      });
    };
  };

  handleInfo = () => {
    var { users } = this.props;
    var { firstName, lastName, address, dob, phone, avatar, role } = this.state;
    var userMail = JSON.parse(localStorage.getItem("user"));
    var index = this.findIndex(userMail, users);

    if (index === -1) return;

    var user = {
      id: users[index].id,
      email: users[index].email,
      password: users[index].password,
      firstName: firstName,
      lastName: lastName,
      role: role,
      avatar: avatar ? avatar : "",
      address: address,
      dob: dob,
      phone: phone,
    };
    this.props.onUpdateUser(user);
  };

  onSave = (e) => {
    e.preventDefault();
    var { users } = this.props;
    var userMail = JSON.parse(localStorage.getItem("user"));
    var index = this.findIndex(userMail, users);
    this.handleInfo();
    this.setState({ check: users[index].id });
  };

  onChooseAvatar = () => {
    this.fileRef.current.click();
  };

  render() {
    var { firstName, check, lastName, address, dob, phone, srcImage } =
      this.state;
    if (check) {
      return <Redirect to={`/admin`} />;
    }
    return (
      <div className="container-fluid avatar-page" id="login-form">
        <div className="login-form-content p-0">
          <div className="row align-items-center w-100">
            <div className="col-6 avatar-left ">
              <div className="img mb-3 text-center">
                <img
                  src={
                    srcImage
                      ? srcImage
                      : "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
                  }
                  alt=""
                  className="avatar rounded-circle "
                />
              </div>
              <div className="choose-avatar text-center">
                <input
                  type="file"
                  className="d-none"
                  ref={this.fileRef}
                  name="file"
                  multiple
                  onChange={this.onPostAvatar}
                />
                <button
                  className="btn border shadow-none "
                  onClick={this.onChooseAvatar}
                >
                  Choose Avatar
                </button>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="display-5 fw-bold mb-4 font-ubun">INFOMATION</div>
              <form action="" onSubmit={this.onSave}>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="firstName"
                    aria-label="First name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={this.onChange}
                    className="form-control shadow-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.onChange}
                    aria-label="Last name"
                    placeholder="Last Name"
                    className="form-control shadow-none"
                  />
                </div>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    value={address}
                    onChange={this.onChange}
                    name="address"
                    className="form-control shadow-none"
                    placeholder="Address"
                  />
                </div>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="dob"
                    value={dob}
                    onChange={this.onChange}
                    className="form-control shadow-none"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                    className="form-control shadow-none"
                    placeholder="Telephone Number"
                  />
                </div>
                <button type="submit" className="btn btn-success w-50">
                  Save
                </button>
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
    onUpdateUser: (user) => {
      dispatch(actions.acUpdateUserAdminRequest(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
