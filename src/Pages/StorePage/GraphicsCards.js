import React, { Component } from "react";
import GraphicsCard from "./../../Components/Store/GraphicsCards/GraphicsCard";
import Header from "./../../Components/LoginPage/HeaderLogin/Header/Header";
import Breadcumb from "../../Components/LoginPage/ContentLogin/Breadcumb/Breadcumb";
import Footer from "../../Components/HomePage/Footer/Footer";
import Banner from "../../Components/HomePage/Banner/Banner";

class GraphicsCards extends Component {
  render() {
    return (
      <>
        <Header history={this.props.history} />
        <Breadcumb to="/" toBack="Home" current="Graphics Cards" />
        <Banner />
        <GraphicsCard match={this.props.match} history={this.props.history} />
        <Footer />
      </>
    );
  }
}

export default GraphicsCards;
