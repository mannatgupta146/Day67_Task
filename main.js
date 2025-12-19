import nav from "./nav.js";
import left from "./left.js";

const role = React.createElement("a", { id: "role" }, "product designer");
const divider = React.createElement("div", { id: "divider" });
const year = React.createElement("a", { id: "year" }, "2025");

const sidebar = React.createElement(
  "div",
  { id: "sidebar" },
  [role, divider, year]
);

const image = React.createElement("div", { id: "image" });

const main = () =>
  React.createElement("div", { id: "container" }, [
    nav(),
    sidebar,
    left(),
    image,
  ]);

export default main;
