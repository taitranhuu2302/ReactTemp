import React, { Component } from "react";
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";

class GearSlide extends Component {
  onGearSlide = (gearSlide) => {
    var result = null;

    result = gearSlide.map((item, index) => {
      return (
        <div key={index} className="slide-item">
          <Link to={item.to}>
            <div className="img">
              <img src={item.image} alt="" />
            </div>
            <div className="caption">
              <span className="caption-content">{item.caption}</span>
            </div>
          </Link>
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
      slidesToShow: 4,
      slidesToScroll: 4,
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
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
    var { gearSlide } = this.props;
    return (
      <div className="container-fluid" id="gear-slide">
        <div className="row w-100 m-0">
          <div className="col-12 caption-title text-center">
            <h1>GAMING GEARS</h1>
            <p>
              AORUS is a world leading brand in high-performance motherboards,
              graphic cards, laptops gaming hardware and systems. We are
              passionate about teaming up with gamers to fearlessly challenge
              the limits and win ultimate glory.
            </p>
          </div>
          <div className="col-12 slides">
            <Slider {...settings}>{this.onGearSlide(gearSlide)}</Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gearSlide: state.gearSlides,
  };
};

export default connect(mapStateToProps,null)(GearSlide);
