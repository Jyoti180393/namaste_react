import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React "
);
root.render(heading);
console.log(heading); // This will show object structure of heading

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 tag from "),
    React.createElement("h2", {}, "I am a H2 tag from child2"),
  ]),
]);
// root.render(parent);
console.log(parent); // This will show object structure of parent

const span = <span> Hello from Span Element</span>;
const heading1 = (
  <h1 id="heading" className="heading">
    Hello from React Element
    {span}
  </h1>
);

// this will be rendered in root as Html Element by ReactDOM
// console.log(heading);

// UsingJSX
const Heading1 = () => (
  <h1 id="jsx-heading" className="jsxHeading">
    This is a React Element using JSX
  </h1>
);
//JSX transpiled to React.createElement() by Babel

// React component with JSX
const HeadingComponent = () => (
  <div id="container">
    {heading}
    <Heading1 />
    <h1>This is react Component</h1>
  </div>
);
console.log(<HeadingComponent />);
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// to render a React component we need angular brackets inside render method
// with <> babbel understand that it is a React component
root.render(<HeadingComponent />);
