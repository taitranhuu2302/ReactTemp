import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Product(props) {
  const onAddToCart = (item) => {
    props.onAddToCart(item);
  };

  return (
    <div className="col product-item">
      <div className="bgr">
        <img src={props.item.image} alt="" />
        <div className="item-caption font-family-Ti">{props.item.name}</div>
        <div className="button-task">
          <Link
            to={`${props.match.path}/${props.item.id}/KeyFeatures`}
            className="btn rounded-0 button-link shadow-none me-3 font-family-Ti"
          >
            Learn More
          </Link>
          <button
            onClick={() => onAddToCart(props.item)}
            className="btn rounded-0 button-add shadow-none font-family-Ti"
          >
            Compare
          </button>
        </div>
      </div>
    </div>
  );
}
