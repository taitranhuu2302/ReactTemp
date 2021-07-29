import React, { Component } from "react";
import "./styles.scss";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }

  paginate = (number) => {
    this.props.paginate(number);
  };
  toggleClass = (number) => {
    this.setState({
      active: number,
    });
  };

  render() {
    var { postsPerPage, totalPosts, paginate } = this.props;
    var { active } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav className="nav justify-content-center">
        <ul className="pagination pagi-list">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                onClick={() => {
                  paginate(number);
                  this.toggleClass(number);
                }}
                className={
                  active === number
                    ? "btn rounded-0 font-family-Ti shadow-none btn-active"
                    : "btn rounded-0 font-family-Ti shadow-none"
                }
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
