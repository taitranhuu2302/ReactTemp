import * as types from "./../Constant/ActionTypes";

var inititalState = [
  {
    imageXL: "/assets/image/HomeBanner1.jpg",
    image: "/assets/image/HomeBanner1.2.jpg",
    positionCaption: "caption-center text-center",
    title: "Performance above All",
    description: "AORUS & AERO Laptop With 11th Gen Intel Core H-series",
  },
  {
    imageXL: "/assets/image/Banner2.jpg",
    image: "/assets/image/Banner2.1.jpg",
    positionCaption: "caption-right text-center",
    title: "Model X",
    description: "Ultimate AORUS",
  },
  {
    imageXL: "assets/image/Banner3.jpg",
    image: "assets/image/Banner3.1.jpg",
    positionCaption: "caption-center text-center",
    title: "GEAR UP WITH AORUS",
    description: "BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*",
  },
  {
    imageXL: "assets/image/Banner4.jpg",
    image: "assets/image/Banner4.1.jpg",
    positionCaption: "caption-center text-center",
    title: "4K Pro Gaming On!",
    description: "GIGABYTE AORUS 4K Monitors - Ready for New-Gen Console",
  },
  {
    imageXL: "assets/image/banner5.jpg",
    image: "assets/image/Banner5.1.jpg",
    positionCaption: "caption-left text-center",
    title: "HOW TO BUILD A PC",
    description: "BUILDING YOUR OWN PC IS THAT SIMPLE",
  },
  {
    imageXL: "/assets/image/Banner6.jpg",
    image: "/assets/image/Banner6.1.jpg",
    positionCaption: "caption-left text-center",
    title: "AORUS  Gallery",
    description: "#PoweredbyAORUS",
  },
  {
    imageXL: "/assets/image/Banner7.jpg",
    image: "/assets/image/Banner7.1.jpg",
    positionCaption: "caption-center text-center",
    title: "THE BEST FOR THE PRO",
    description: "AORUS Z590  GAMING MOTHERBOARDS",
  },
];

const slider = (state = inititalState, action) => {
  switch (action.type) {
    case types.BANNER_SLIDES:
      return [...state];
    default:
      return [...state];
  }
};
export default slider;
