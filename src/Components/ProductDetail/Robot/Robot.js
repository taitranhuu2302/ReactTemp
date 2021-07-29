import React, { Component } from "react";
import "./styles.scss";

class Robot extends Component {
  render() {
    return (
      <div className="row m-0 robot-bgr">
        <div className="col-lg-4 col-12 col-text d-flex flex-column">
          <img
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/title-line.png"
            alt=""
            className="line-image mb-3"
          />
          <h3>DESIGN CONCEPT</h3>
          <p className="font-family-Ti">
            In the AORUS dimension, everything is constructed digitally. The
            lighting and patterns are mapped onto the products with an
            efficient, free flowing style. Welcome to the Digital Code Era.
          </p>
          <div className="bgr-text-gradient"></div>
        </div>
        <div className="col-lg-8 col-12 p-0 concept-robot">
          <img
            className="layer bgr-robot"
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/designConcept/bg.jpg"
            alt=""
          />
          <img
            className="image-robot"
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/designConcept/1.png"
            alt=""
          />

          <img
            className="layer robot-frame1"
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/designConcept/4.png"
            alt=""
          />
          <img
            className="layer robot-frame2"
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/designConcept/4.png"
            alt=""
          />
          <img
            className="layer robot-frame3"
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/designConcept/4.png"
            alt=""
          />
          <img
            className="layer robot-frame4"
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/designConcept/4.png"
            alt=""
          />
          <div className="layer line-robot1"></div>
          <div className="layer line-robot2"></div>
          <div className="layer line-robot3"></div>
          <div className="layer line-robot4"></div>
          <div className="layer line-robot5"></div>
          <div className="layer line-robot6"></div>
          <div className="layer line-robot7"></div>
        </div>
      </div>
    );
  }
}

export default Robot;
