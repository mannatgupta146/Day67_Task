const logo = React.createElement("div", { id: "logo" });

const about = React.createElement("h3", null, "About Me");
const portfolio = React.createElement("h3", null, "Portfolio");
const services = React.createElement("h3", null, "Services");
const blog = React.createElement("h3", null, "Blog");

const call = React.createElement("a", null, "Book A Call");

const navLeft = () =>
  React.createElement("div", { id: "nav-left" }, [
    logo,
    about,
    portfolio,
    services,
    blog,
  ]);

const nav = () =>
  React.createElement("nav", null, [navLeft(), call]);

export default nav;
