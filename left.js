let h1 = React.createElement("h1", { key: "h1" }, "+200");
let h4 = React.createElement("h4", { key: "h4" }, "Project completed");

let h2 = React.createElement("h1", { key: "h2" }, "+50");
let h5 = React.createElement("h4", { key: "h5" }, "Startup raised");

let leftTopElm1 = React.createElement(
  "div",
  { id: "left-top-elm1", key: "elm1" },
  [h1, h4]
);

let leftTopElm2 = React.createElement(
  "div",
  { id: "left-top-elm2", key: "elm2" },
  [h2, h5]
);

let leftTop = () =>
  React.createElement("div", { id: "left-top" }, [
    leftTopElm1,
    leftTopElm2,
  ]);

let h3 = React.createElement("h1", { key: "h3" }, "Hello");
let h6 = React.createElement(
  "h4",
  { key: "h6" },
  "- It's D.Nova a design wizard"
);

let leftCenter = () =>
  React.createElement("div", { id: "left-center" }, [h3, h6]);

let leftBottom = React.createElement(
  "div",
  { id: "left-bottom" },
  "Scroll down ↓"
);

const left = () =>
  React.createElement("div", { id: "left" }, [
    leftTop(),
    leftCenter(),
    leftBottom,
  ]);

export default left;
