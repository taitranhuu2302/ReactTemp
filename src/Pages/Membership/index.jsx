import React from "react";
import Header from "./../../Components/LoginPage/HeaderLogin/Header/Header";
import Footer from "./../../Components/LoginPage/FooterLogin/footer";
import Body from "./../../Components/MemberShip";
import Breadcumb from "../../Components/LoginPage/ContentLogin/Breadcumb/Breadcumb";

export default function MembershipPage() {
  return (
    <>
      <Header />
      <Breadcumb to="/" toBack="Home" current="My Account" />
      <Body />
      <Footer />
    </>
  );
}
