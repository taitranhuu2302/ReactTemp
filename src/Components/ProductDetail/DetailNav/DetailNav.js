import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class DetailNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  active = (number) => {
    this.setState({ active: number });
  };

  listNav = (list) => {
    var { match } = this.props;
    return list.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => this.active(index)}
          className={
            match.url === `/GraphicsCard/${match.params.id}/${item.label}`
              ? "nav-item activeNumber"
              : "nav-item"
          }
        >
          <Link
            to={`/GraphicsCard/${match.params.id}/${item.label}`}
            className="nav-link"
          >
            {item.label}
          </Link>
        </li>
      );
    });
  };

  render() {
    var { sticky } = this.props;
    return (
      <div
        className={
          sticky
            ? "container-fluid detail-nav py-4 sticky"
            : "container-fluid detail-nav py-4"
        }
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 color-orange name-product">
              AORUS GeForce RTX™ 3090 XTREME WATER
            </div>
            <div className="col-lg-6 col-12 nav-list">
              <ul className="nav justify-content-start justify-content-lg-end">
                {this.listNav(listNav)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const listNav = [
  {
    label: "KeyFeatures",
  },
  {
    label: "Specification",
  },
  {
    label: "Gallery",
  },
  {
    label: "Buy",
  },
];

export default DetailNav;
