import * as types from "./../Constant/ActionTypes";

var inititalState = [
  {
    image: "https://global.aorus.com/upload/Product/F_202106161439842UJ8MT.JPG",
    tag: "Dicover",
    caption: "AORUS Best Gaming Setup: Part 10",
  },
  {
    image: "https://global.aorus.com/upload/Product/F_202106021745954q5c10.JPG",
    tag: "Tutorial",
    caption:
      "Beginners 101 - PC and Console Gaming: Which Is the Choice for Me",
  },
  {
    image: "https://global.aorus.com/upload/Product/F_2021062816307466YEPH.JPG",
    tag: "Event",
    caption: "Swtich Between Wrok n'Plau with KVM",
  },
  {
    image: "https://global.aorus.com/upload/Product/F_20210409115685JhyVsj.JPG",
    tag: "Event",
    caption: "WE LEAD IN RED - AORUS x AMD Q2 Promotion",
  },
  {
    image: "https://global.aorus.com/upload/Product/F_2021061617552510lC7m.JPG",
    tag: "Dicover",
    caption: " 【Member Submission】im_X's  AORUS Gaming Room ",
  },
  {
    image: "https://global.aorus.com/upload/Product/F_20210611153952cYywc3.JPG",
    tag: "Dicover",
    caption: " 【Member Submission】Ace's AORUS Life ",
  },
];

const exploreSlides = (state = inititalState, action) => {
  switch (action.type) {
    case types.EXPLORE_SLIDES:
      return [...state];
    default:
      return [...state];
  }
};
export default exploreSlides;
