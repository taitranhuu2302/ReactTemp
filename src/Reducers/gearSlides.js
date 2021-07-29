import * as types from "./../Constant/ActionTypes";

var inititalState = [
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Laptop.e77d5ad1.png",
    caption: "Gaming Laptops",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Monitor.b4e0aada.png",
    caption: "Gaming Monitors",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Peripherals.9f53da7d.png",
    caption: "Gaming Peripherals",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Components.9dcdfdc0.png",
    caption: "Premium Components",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Desktop-PC.ab83c481.png",
    caption: "DESKTOP PC",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Motherboard.18fe2f57.png",
    caption: "Gaming Motherboards",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Graphics.6ca7d8bf.png",
    caption: "Premium Graphics Cards",
  },
];

const gearSlides = (state = inititalState, action) => {
  switch (action.type) {
    case types.GEAR_SLIDES:
      return [...state];
    default:
      return [...state];
  }
};
export default gearSlides;
