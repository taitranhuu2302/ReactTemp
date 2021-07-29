/* eslint-disable no-dupe-keys */
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.scss";
import SlideItem from "./SlideItem";
import { connect } from "react-redux";
// import logo from

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 500,
  cssEase: "linear",
};

class Banner extends Component {
  slidesShow = (slides) => {
    var result = null;
    result = slides.map((slide, index) => {
      return <SlideItem slide={slide} key={index} />;
    });
    return result;
  };

  render() {
    var { slides } = this.props;
    return (
      <div className="container-fluid p-0 " id="banner">
        <Slider {...settings}>{this.slidesShow(slides)}</Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    slides: state.slider,
  };
};

export default connect(mapStateToProps, null)(Banner);
