import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import "./styles.scss";

class SliderDetail extends Component {
  listItem = (list) => {
    return list.map((item, index) => {
      return <SliderItem item={item} key={index} />;
    });
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      nav: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    var { list } = this.props;
    return (
      <Slider {...settings} className="crs-list">
        {this.listItem(list)}
      </Slider>
    );
  }
}

export default SliderDetail;
