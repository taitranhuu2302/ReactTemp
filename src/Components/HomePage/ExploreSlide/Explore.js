import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./styles.scss";
import { connect } from "react-redux";

class Explore extends Component {
  onExploreSlide = (exploreSlide) => {
    var result = null;
    result = exploreSlide.map((item, index) => {
      return (
        <div
          key={index}
          className="slide-item  d-flex flex-column align-items-center"
        >
          <div className="img">
            <img src={item.image} alt="" />
            <div className="tag">{item.tag}</div>
          </div>
          <div className="slide-content">
            <h4 className="my-3">{item.caption}</h4>
            <Link
              to="/"
              type="button"
              className="btn caption-btn rounded-0 shadow-none"
            >
              MORE
            </Link>
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
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    var { exploreSlide } = this.props;
    return (
      <div className="container-fluid slide-explore">
        <div className="row w-100 m-0">
          <div className="col-12 caption-title text-center">
            <h1>EXPLORE #AORUS</h1>
            <p>
              Discover PC builds inspiration, DIY tips, gaming tricks, worldwide
              AORUS events, and more.
            </p>
            <Link to="/">
              GET STARTED <i className="fal fa-chevron-right"></i>
            </Link>
          </div>
          <div className="col-12 slides">
            <Slider {...settings}>{this.onExploreSlide(exploreSlide)}</Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exploreSlide: state.exploreSlides,
  };
};

export default connect(mapStateToProps, null)(Explore);
