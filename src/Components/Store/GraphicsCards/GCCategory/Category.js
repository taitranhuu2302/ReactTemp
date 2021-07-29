import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { Link } from "react-router-dom";

class Category extends Component {
  showGraphicCardList = (arr) => {
    var result = null;
    result = arr.map((item, index) => {
      return (
        <div key={index} className="slide-item">
          <div className="text-decoration-none bgr" to="/">
            <div className="img">
              <Link to={item.to}>
                <img src={item.image} className="w-100 img-fluid" alt="" />
              </Link>
            </div>
            <div className="slide-title">{item.name}</div>
          </div>
        </div>
      );
    });
    return result;
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    var { listCard } = this.props;
    return (
      <div className="container-fluid title">
        <div className="container">
          <h2 className="text-center mb-4 color-orange size-18">
            GRAPHICS CARDS
          </h2>
          <Slider {...settings} className="slides">
            {this.showGraphicCardList(listCard)}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Category;
