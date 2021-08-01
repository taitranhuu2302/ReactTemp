import React, { Component } from "react";
import { Link } from "react-router-dom";

class FilterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: 0,
      filterCategory: 0,
    };
  }

  onFilter = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus,
      name === "filterCategory" ? value : this.state.filterCategory
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { filterName, filterStatus, filterCategory } = this.state;
    return (
      <tr className="filter-table">
        <td></td>
        <td></td>
        <td>
          <input
            type="text"
            className="w-100 rounded  form-control"
            name="filterName"
            value={filterName}
            onChange={this.onFilter}
          />
        </td>
        <td>
          <select
            className="form-control"
            value={filterCategory}
            onChange={this.onFilter}
            name="filterCategory"
          >
            <option value={0}>All</option>
            <option value={1}>AORUS</option>
            <option value={2}>NVIDIA</option>
            <option value={3}>AMD</option>
          </select>
        </td>
        <td>
          <select
            className="form-control"
            value={filterStatus}
            onChange={this.onFilter}
            name="filterStatus"
          >
            <option value={0}>All</option>
            <option value={-1}>Blocked</option>
            <option value={1}>Active</option>
          </select>
        </td>
        <td>
          <Link
            to="/admin/add-products"
            className="btn add-product bg-primary text-white"
          >
            Add Product
          </Link>
        </td>
        <td></td>
      </tr>
    );
  }
}

export default FilterTable;
