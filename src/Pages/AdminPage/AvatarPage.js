import React, { Component, Fragment } from "react";
import Avatar from "../../Components/AdminPage/Avatar/Avatar";

class AvatarPage extends Component {
  render() {
    return (
      <Fragment>
        <Avatar match={this.props.match} />
      </Fragment>
    );
  }
}

export default AvatarPage;
