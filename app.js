import React from "react";
import ReactDOM from "react-dom/client";

const span = <span> Hello from Span Element</span>;
const heading = (
<h1 id="heading" className="heading"> 
  Hello from React Element
  {span} 
  </h1>
)

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
    <Heading1/>
    <h1>This is react Component</h1>
  </div>
)
console.log(< HeadingComponent />);
// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// to render a React component we need angular brackets inside render method
// with <> babbel understand that it is a React component
root.render(<HeadingComponent />);

