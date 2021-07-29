import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SubCanvas extends Component {
  subCanvas = (list) => {
    var result = null;
    result = list.map((item, index) => {
      return (
        <Link to={item.to} key={index * 10}>
          {item.label}
        </Link>
      );
    });
    return result;
  };
  render() {
    var { item } = this.props;
    return (
      <li className="list-item mb-2">
        <div className="item-title">
          <span>{item.navItem}</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="sub-menu d-flex flex-column">
          {this.subCanvas(item.list)}
        </div>
      </li>
    );
  }
}
