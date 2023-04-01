import React from "react";
import ReactDOM from "react-dom/client";

/*
* <div id="parent">
*      <div id="child">
*           <h1>I'm h1 tag</h1>
*           <h2>I'm h1 tag</h2>
*           </div>
*      <div id="child2">
            <h1>I'm h1 tag</h1>
*           <h2>I'm h1 tag</h2>
        </div>
   </div>    
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm in h1 tag"),
    React.createElement("h2", {}, "I'm in h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm in h1 tag"),
    React.createElement("h2", {}, "I'm in h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" }, //used to create attribute to html element
  "Hello World from React!" //children
);

console.log(parent); //javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //used to convert that object into html element
