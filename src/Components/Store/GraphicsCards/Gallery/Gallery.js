import React, { Component } from "react";
import "./styles.scss";

class gallery extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="gallery-title text-center">
            <div className="display-5 mb-5 color-orange">
              GRAPHICS CARD GALLERY
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-4">
            <div className="col p-0">
              <img
                src="assets/image/gallery-1616062923.jpg"
                alt=""
                className="w-100"
              />
              <img
                src="assets/image/gallery-1616033454.jpg"
                alt=""
                className="w-100"
              />
            </div>
            <div className="col p-0">
              <img
                src="assets/image/gallery-1616062555.jpg"
                alt=""
                className="w-100"
              />
              <img
                src="assets/image/gallery-1616062031.jpg"
                alt=""
                className="w-100"
              />
              <img
                src="assets/image/gallery-1616033897.jpg"
                alt=""
                className="w-100"
              />
            </div>
            <div className="col p-0">
              <img
                src="assets/image/gallery-1616062400.jpg"
                alt=""
                className="w-100"
              />
              <img
                src="assets/image/gallery-1616062010.jpg"
                alt=""
                className="w-100"
              />
              <img
                src="assets/image/gallery-1616033041.jpg"
                alt=""
                className="w-100"
              />
            </div>
            <div className="col p-0">
              <img
                src="https://www.aorus.com/image/gallery/gallery-1616062114.jpg"
                alt=""
                className="w-100"
              />
              <img
                src="https://www.aorus.com/image/gallery/gallery-1616034028.jpg"
                alt=""
                className="w-100"
              />
              <img
                src="https://www.aorus.com/image/gallery/gallery-1615977109.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default gallery;
