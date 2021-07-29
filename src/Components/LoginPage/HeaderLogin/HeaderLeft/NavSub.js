import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavSub extends Component {
  render() {
    var { item } = this.props;
    return (
      <li className="menu-item">
        <Link to={item.to}>{item.label}</Link>
      </li>
    );
  }
}

export default NavSub;
