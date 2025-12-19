const countOne = React.createElement("h1", null, "+200");
const textOne = React.createElement("h4", null, "Project completed");

const countTwo = React.createElement("h1", null, "+50");
const textTwo = React.createElement("h4", null, "Startup raised");

const statOne = React.createElement(
  "div",
  { id: "stat-one" },
  [countOne, textOne]
);

const statTwo = React.createElement(
  "div",
  { id: "stat-two" },
  [countTwo, textTwo]
);

const stats = () =>
  React.createElement("div", { id: "stats" }, [statOne, statTwo]);

const title = React.createElement("h1", null, "Hello");
const subtitle = React.createElement(
  "h4",
  null,
  "- It's D.Nova a design wizard"
);

const heading = () =>
  React.createElement("div", { id: "heading" }, [title, subtitle]);

const footerText = React.createElement(
  "div",
  { id: "footer-text" },
  "Scroll down ↓"
);

const left = () =>
  React.createElement("div", { id: "content" }, [
    stats(),
    heading(),
    footerText,
  ]);

export default left;
