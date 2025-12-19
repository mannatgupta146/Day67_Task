let logo = React.createElement("div", { id: "img-div" });

let AboutMe = React.createElement("h3", null, "About Me");
let Portfolio = React.createElement("h3", null, "Portfolio");
let Services = React.createElement("h3", null, "Services");
let Blog = React.createElement("h3", null, "Blog");

let BookACall = React.createElement("a", null, "Book A Call");

const navPart = () =>
  React.createElement("div", { id: "nav-part1" }, [
    logo,
    AboutMe,
    Portfolio,
    Services,
    Blog,
  ]);

const nav = () =>
  React.createElement("nav", null, [navPart(), BookACall]);

export default nav;
