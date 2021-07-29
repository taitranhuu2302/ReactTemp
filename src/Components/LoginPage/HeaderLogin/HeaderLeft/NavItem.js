import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavSub from "./NavSub";

class NavItem extends Component {
  renderNavSub = (list) => {
    var result = null;

    result = list.map((item, index) => {
      return <NavSub item={item} key={index} />;
    });

    return result;
  };
  render() {
    var { item } = this.props;
    return (
      <li className="nav-item">
        <Link to="/">{item.navItem}</Link>
        <ul className="menu-sub d-flex flex-column">
          {this.renderNavSub(item.list)}
        </ul>
      </li>
    );
  }
}

export default NavItem;
