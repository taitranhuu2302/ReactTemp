import * as types from "./../Constant/ActionTypes";

var inititalState = [
  {
    navItem: "PRODUCTS",
    list: [
      {
        to: "/",
        image: "/assets/image/Motherboard.18fe2f57.png",
        label: "MOTHERBOARD",
        exact: false,
      },
      {
        to: "/GraphicsCard",
        image: "/assets/image/Graphics.6ca7d8bf.png",
        label: "GRAPHICS CARDS",
        exact: false,
      },
      {
        to: "/",
        image: "/assets/image/Laptop.e77d5ad1.png",
        label: "LAPTOPS",
        exact: false,
      },
      {
        to: "/",
        image: "/assets/image/Monitor.b4e0aada.png",
        label: "MONITORS",
        exact: false,
      },
      {
        to: "/",
        image: "/assets/image/Desktop-PC.ab83c481.png",
        label: "DESKTOP PC",
        exact: false,
      },
      {
        to: "/",
        image: "/assets/image/Peripherals.9f53da7d.png",
        label: "PC PERIPHERALS",
        exact: false,
      },
      {
        to: "/",
        image: "/assets/image/Components.9dcdfdc0.png",
        label: "PC COMPONENTS",
        exact: false,
      },
    ],
  },
  {
    navItem: "EXPLORE",
    list: [
      {
        to: "/",
        label: "NEWS",
        exact: false,
      },
      {
        to: "/",
        label: "EVENTS",
        exact: false,
      },
      {
        to: "/",
        label: "BLOG",
        exact: false,
      },
      {
        to: "/",
        label: "WALLPAPER",
        exact: false,
      },
    ],
  },
  {
    navItem: "SERVICE",
    list: [
      {
        to: "/",
        label: "WARRANTY INFORMATION",
        exact: false,
      },
      {
        to: "/",
        label: "PRODUCT REGISTRATION",
        exact: false,
      },
    ],
  },
  {
    navItem: "MEMBERSHIP",
    list: [
      {
        to: "/",
        label: "WHY JOIN?",
        exact: false,
      },
      {
        to: "/",
        label: "MEMBERSHIP LEVELS",
        exact: false,
      },
      {
        to: "/",
        label: "AORUS POINTS & REWADS",
        exact: false,
      },
      {
        to: "/",
        label: "ACHIVEMENT BAGGES",
        exact: false,
      },
      {
        to: "/",
        label: "MEMBER LEADERBOARD",
        exact: false,
      },
      {
        to: "/",
        label: "MEMBER FAQS",
        exact: false,
      },
    ],
  },
];

const navItem = (state = inititalState, action) => {
  switch (action.type) {
    case types.NAVITEM:
      return [...state];
    default:
      return [...state];
  }
};
export default navItem;
