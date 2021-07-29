import React, { Component } from "react";
import NavSub from "./NavSub";

export default class NavItem extends Component {
  navSub = (list) => {
    var result = null;
    result = list.map((item, index) => {
      return <NavSub item={item} key={index} />;
    });
    return result;
  };
  render() {
    var { item } = this.props;
    var html = null;
    if (!item.list[0].image) {
      html = (
        <li className="nav-item">
          <div className="nav-link nav-title">
            <span>{item.navItem}</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <ul className="nav sub-menu nav-drop flex-column">
            {this.navSub(item.list)}
          </ul>
        </li>
      );
    } else {
      html = (
        <li className="nav-item">
          <div className="nav-link nav-title">
            <span>{item.navItem}</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="wrapper-drop container-fluid">
            <ul className="nav nav-drop justify-content-center">
              {this.navSub(item.list)}
            </ul>
          </div>
        </li>
      );
    }
    return html;
  }
}
