import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: [],
    };
  }

  liElement = (pageNumber) => {
    return pageNumber.map((number) => {
      return (
        <li key={number} className="page-item px-0">
          <button
            onClick={() => this.props.paginate(number)}
            className="page-link shadow-none"
          >
            {number}
          </button>
        </li>
      );
    });
  };

  render() {
    var { postsPerPage, totalProduct } = this.props;
    var pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalProduct / postsPerPage); i++) {
      pageNumber.push(i);
    }
    return (
      <ul className="pagination">{this.liElement(pageNumber)}</ul>
    );
  }
}

export default Pagination;
