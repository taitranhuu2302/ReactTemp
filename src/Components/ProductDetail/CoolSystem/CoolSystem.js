import React, { Component } from "react";
import "./styles.scss";

class CoolSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  activeLi = (number) => {
    this.setState({ number: number });
  };

  listCool = (list) => {
    return list.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => this.activeLi(index)}
          className={
            this.state.number === index
              ? "nav-item mb-3 active-li"
              : "nav-item mb-3"
          }
        >
          <h5 className="m-0">{item.title}</h5>
          <p className="font-family-Ti m-0">{item.content}</p>
        </li>
      );
    });
  };
  listCoolImage = (list) => {
    return list.map((item, index) => {
      return (
        <img
          className={this.state.number === index ? "active-image" : ""}
          key={index}
          src={item.image}
          alt=""
        />
      );
    });
  };

  render() {
    return (
      <div className="container-fluid p-0" id="cool">
        <div className="row h-100 m-0 cool-row align-items-center justify-content-start">
          <div className="col-lg-6 col-12 cool-text flex flex-column">
            <img
              className="image-title mb-4"
              src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/title-line.png"
              alt=""
            />
            <h2>WATERFORCE COOLING SYSTEM</h2>
            <p className="font-family-Ti mb-5">
              The ideal way for PC enthusiasts to enter the world of water
              cooling without having to deal with complicated installations.
              AORUS provides an all-round cooling solution as critical parts
              like GPU, VRAM and MOSFET are actively cooled to ensure system
              stability under high overclocks.
            </p>
            <ul className="nav flex-column">{this.listCool(listCool)}</ul>
          </div>
          <div className="col-lg-6 col-12 cool-image">
            <img
              className="bgr-img"
              src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/cool-img-bg.jpg"
              alt=""
            />
            {this.listCoolImage(listCool)}
          </div>
        </div>
      </div>
    );
  }
}

const listCool = [
  {
    title: "EASY INSTALLATION",
    content:
      "With the pre-assembled water pipe and pump, users can easily install the graphics card without leakge concerns.",
    image:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/cool-img-install.png",
  },
  {
    title: "Optimized 240mm ALUMINUM RADIATOR",
    content:
      "The double-sized radiators and fins increase the surface area and volume for thermal, making the graphics card mroe stable and cool under high overclocks.",
    image:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/cool-img-radiator.png",
  },
  {
    title: "2X 120MM ARGB FANS",
    content:
      "The dual fans can generate more airflow to better heat dissipation, delivering a powerful cooling and quiet gaming experience. The ARGB fans lights also can synchronize with the graphics card for various light effects via RGB FUSION 2.0",
    image:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/cool-img-fans.png",
  },
  {
    title: "DOUBLE BALL BEARING",
    content:
      "The double ball bearing structure has better heat endurance and efficiency than sleeve structure",
    image:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/cool-img-twoball.png",
  },
  {
    title: "LARGE COPPER BASE PLATE",
    content:
      "The copper base plate directly touches the GPU, VRAM and other critical parts. Coupled with heat pipes, the heat can be transferred to the liquid cooling zone fo achieving enhanced heat dissipation",
    image:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/cool-img-copper.png",
  },
  {
    title: "BRAIDED FEP TUBES",
    content:
      "With bearly no moisture absorption, high thermal stabillity and high perssure tolerance, the sturdy FEP tubes greatly enhance product life and durabillity.",
    image:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/cool-img-tube.png",
  },
];

export default CoolSystem;
