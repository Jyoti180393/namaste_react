const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
// root.render(heading);
// console.log(heading); // This will show object structure of heading

const parent = React.createElement("div", {id:"parent"},
  [
    React.createElement("div",{id:"child"}, [ 
      React.createElement("h1",{},"I am a H1 tag"),
      React.createElement("h2",{},"I am a H2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
      React.createElement("h1",{},"I am a H1 tag from child2"),
      React.createElement("h2",{},"I am a H2 tag from child2")]
  )
  ] 
    );
root.render(parent);
console.log(parent); // This will show object structure of parent