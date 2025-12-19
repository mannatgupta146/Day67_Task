import nav from "./nav.js";
import left from "./left.js";

let a1 = React.createElement("a", { id: "a1" }, "product designer");
let line = React.createElement("div", { id: "line" });
let a2 = React.createElement("a", { id: "a2" }, "2025");

let page1LeftBar = React.createElement(
  "div",
  { id: "page1-leftt" },
  [a1, line, a2]
);

let page1Right = React.createElement("div", { id: "page1-right" });

const main = () =>
  React.createElement("div", { id: "page1" }, [
    nav(),
    page1LeftBar,
    left(),
    page1Right,
  ]);

export default main;
