import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class footer extends Component {
  renderNav = (list) => {
    var result = null;
    result = list.map((item, index) => {
      return (
        <li key={index} className="nav-item">
          <Link className="nav-link size-15" to={item.to}>
            {item.label}
          </Link>
        </li>
      );
    });

    return result;
  };
  render() {
    return (
      <div className="container-fluid" id="footer">
        <div className="container">
          <ul className="nav justify-content-center">{this.renderNav(list)}</ul>
          <hr />
          <div className="copyright text-center font-family-Ti">
            ©2020 GIGA-BYTE Technology Co., Ltd. All rights reserved. All
            intellectual property rights, including without limitation to
            copyright and trademark of this work and its derivative works are
            the property of, or are licensed to, GIGA-BYTE Technology Co., Ltd.
            Any unauthorized use is strictly prohibited.
          </div>
        </div>
      </div>
    );
  }
}

const list = [
  {
    to: "/",
    label: "About AROUS",
  },
  {
    to: "/",
    label: "Product Registration",
  },
  {
    to: "/",
    label: "Warranty Infomation",
  },
  {
    to: "/",
    label: "Contact Us",
  },
  {
    to: "/",
    label: "Privacy Policy",
  },
  {
    to: "/",
    label: "Terms of Use",
  },
  {
    to: "/",
    label: "Monitor Warranty & Repair",
  },
];

export default footer;
