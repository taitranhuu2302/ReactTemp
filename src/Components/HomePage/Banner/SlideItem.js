import React, { Component } from "react";

class SlideItem extends Component {
  render() {
    var { slide } = this.props;
    return (
      <div className="slider-item">
        <img src={slide.imageXL} alt="" className=" d-none d-lg-block" />
        <img src={slide.image} alt="" className="d-block d-lg-none" />
        <div className={slide.positionCaption}>
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
          <button className="btn caption-btn rounded-0 shadow-none">
            SEE MORE
          </button>
        </div>
      </div>
    );
  }
}

export default SlideItem;
