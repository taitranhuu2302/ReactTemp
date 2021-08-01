import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

class AdminProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }

  checkCategory = () => {
    var { product } = this.props;
    var result = null;
    if (product.aorus) {
      result = "AORUS";
    } else if (product.nvidia) {
      result = "NVIDIA";
    } else {
      result = "AMD";
    }
    return result;
  };

  checkClassCategory = (aorus, nvidia, amd) => {
    var result = null;
    if (aorus) {
      result = "bgr-aorus rounded text-white p-1";
    } else if (nvidia) {
      result = "bgr-nvidia rounded text-white p-1";
    } else {
      result = "bgr-amd rounded text-white p-1";
    }
    return result;
  };

  render() {
    var { product } = this.props;
    return (
      <tr>
        <td>{product.id}</td>
        <td>
          <img src={product.image} alt="" />
        </td>
        <td className="fw-bold">{product.name}</td>
        <td>
          <span
            className={this.checkClassCategory(
              product.aorus,
              product.nvidia,
              product.amd
            )}
          >
            {this.checkCategory()}
          </span>
        </td>
        <td className="">
          <span
            className={
              product.status
                ? "label-status bg-success rounded text-white p-1"
                : "label-status bg-danger rounded text-white p-1"
            }
          >
            {product.status ? "Active" : "Blocked"}
          </span>
        </td>

        <td>
          <Link
            to={`/admin/${product.id}/edit-product`}
            className="btn shadow-none me-3 mb-3 bg-warning text-white"
          >
            Update
          </Link>
          <button
            onClick={() => this.props.onDeleteProduct(product.id)}
            className="btn shadow-none mb-3 bg-danger text-white"
          >
            Delete
          </button>
        </td>
        <td>
          <Typography variant="subtitle1" color="initial">
            {product.updated_at}
          </Typography>
          <Typography variant="caption" className="fw-bold" color="initial">
            {moment(product.updated_at).fromNow()}
          </Typography>
        </td>
      </tr>
    );
  }
}

export default AdminProduct;
