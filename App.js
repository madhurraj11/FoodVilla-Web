// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1',{
  id: "title",
}, "Heading");

const heading1 = React.createElement('h2',{
  id: "title",
}, "Heading 1");

const container = React.createElement('div',{
  id: "container",
  style: {
      background: "blue",
  },
  className: "title",
}, [heading, heading1]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// passing a react element inside the root.
root.render(container);