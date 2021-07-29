import React, { Component, Fragment } from "react";
import Banner from "../../Components/HomePage/Banner/Banner";
import GearSlide from "../../Components/HomePage/GearSlide/GearSlide";
import Explore from "../../Components/HomePage/ExploreSlide/Explore";
import Join from "./../../Components/HomePage/JoinLogin/join";
import HeaderPage from "./../HeaderPage";
import Footer from "../../Components/HomePage/Footer/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderPage history={this.props.history} />
        <Banner />
        <GearSlide />
        <Explore />
        <Join />
        <Footer />
      </Fragment>
    );
  }
}
