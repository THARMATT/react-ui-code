import React from 'react'
import ReactDOM from 'react-dom'
const heading=React.createElement("h1",{},"heading");
const heading1=React.createElement("h1",{},"heading1");
const container=React.createElement("div",{},[heading1,heading]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container)