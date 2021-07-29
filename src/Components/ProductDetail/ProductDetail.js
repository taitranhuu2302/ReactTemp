import React, { Component } from "react";
import "./styles.scss";
import DetailNav from "./DetailNav/DetailNav";
import SliderDetail from "./Slider/SliderDetail";
import Breadcumb from "./../LoginPage/ContentLogin/Breadcumb/Breadcumb";
import Robot from "./Robot/Robot";
import CoolSystem from "./CoolSystem/CoolSystem";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.sticky);
  }

  sticky = () => {
    if (window.scrollY > 172) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  render() {
    var { sticky } = this.state;
    return (
      <div className="container-fluid p-0" id="detail-product">
        <Breadcumb
          to="/"
          toBack="Home"
          to1="/GraphicsCard"
          toBack1="Graphics Cards"
          current="AORUS GeForce RTX™ 3090 XTREME WATERFORCE 24G"
          bgr="bgr-black"
        />
        <DetailNav sticky={sticky} match={this.props.match} />
        <div className="slides-detail">
          <div className="slide-item">
            <video
              loop
              autoPlay
              muted
              src="https://www.gigabyte.com/FileUpload/global/Other/3/Video/30903080waterforce.mp4"
              className="d-xl-block d-none"
            ></video>
            <img
              src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/kv-img-rwd.jpg"
              alt=""
              className="d-block d-xl-none"
            />
          </div>
          <div className="slide-item ">
            <img
              className="bgr-image"
              src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/kf-img-bg.jpg"
              alt=""
            />
            <SliderDetail list={listSlider} />
          </div>
          <div className="slide-item">
            <Robot />
          </div>
          <div className="slide-item">
            <CoolSystem />
          </div>
          <div className="container-fluid slide-item nvidia-footer">
            <div className="container ">
              <div className="row ">
                <div className="col-12 mb-5 d-flex justify-content-center">
                  <div className="logo-footer">
                    <img
                      src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/esrb.jpg"
                      alt=""
                    />
                  </div>
                  <div className="logo-footer">
                    <img
                      src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/RTX.png"
                      alt=""
                    />
                  </div>
                  <div className="logo-footer">
                    <img
                      src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/HDMI.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 mb-4 text-center">
                  <p>
                    © 2020 NVIDIA Corporation. NVIDIA, the NVIDIA logo, GeForce,
                    GeForce Experience, GeForce RTX, G-SYNC, NVLink, and
                    ShadowPlay are registered trademarks and/or trademarks of
                    NVIDIA Corporation in the United States and other countries.
                    All other trademarks and copyrights are the property of
                    their respective owners.
                  </p>
                </div>
                <div className="col-12 text-center">
                  * All the images in this page are for illustration only.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const listSlider = [
  {
    titleTop: "KEY FEATURE",
    listCaption: [
      "NVIDIA Ampere Streaming Multiporcessors",
      "2nd Generation RT Cores",
      "3rd Generation Tensor Cores",
      "Powered by GeForce RTX™ 3090",
      "Integrated with 24GB GDDR6X 384-bit memory interface",
      "WATERFORCE all-in-one cooling system",
      "240mm radiator with 2x 120mm ARGB fans",
      "RGB Fusion 2.0",
      "6 Outputs",
      "Protection metal back plate",
      "4 Years Warranty (Online registration required)",
    ],
    titleBottom: "CORE CLOCK",
    listIcon: [
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/waterforce.png",
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/4years.png",
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/nv-rtx.jpg",
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/rgb-logo.png",
    ],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/kf-img.png",
  },
  {
    titleTop: "NVIDIA Ampere Architecture",
    listCaption: [
      "The all-new NVIDIA Ampere architecture delivers the ultimate play, featuring advanced 2nd generation Ray Tracing Cores and 3rd generation Tensor Cores with greater throughput.",
    ],
    titleBottom: "",
    listIcon: [],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/slide-img-1.jpg",
  },
  {
    titleTop: "RTX. IT’S ON.",
    listCaption: [
      "Experience today’s biggest blockbusters like never before with the visual fidelity of real-time ray tracing and the ultimate performance of AI-powered DLSS.",
    ],
    titleBottom: "",
    listIcon: [],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/slide-img-2.jpg",
  },
  {
    titleTop: "VICTORY MEASURED IN MILLISECONDS",
    listCaption: [
      "NVIDIA Reflex delivers the ultimate competitive advantage. The lowest latency. The best responsiveness. Powered by GeForce RTX 30 Series GPUs and NVIDIA® G-SYNC® monitors. Acquire targets faster, react quicker, and increase aim precision through a revolutionary suite of technologies to measure and optimize system latency for competitive games.",
    ],
    titleBottom: "",
    listIcon: [],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/slide-img-4.jpg",
  },
  {
    titleTop: "VICTORY MEASURED IN MILLISECONDS",
    listCaption: [
      "Take your creative projects to a new level with GeForce RTX 30 Series GPUs. Delivering AI-acceleration in top creative apps. Backed by the NVIDIA Studio platform of dedicated drivers and exclusive tools. And built to perform in record time. Whether you’re rendering complex 3D scenes, editing 8K video, or livestreaming with the best encoding and image quality, GeForce RTX GPUs give you the performance to create your best.",
    ],
    titleBottom: "",
    listIcon: [],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/slide-img-5.jpg",
  },
];

export default ProductDetail;
