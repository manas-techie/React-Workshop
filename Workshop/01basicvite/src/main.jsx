import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Hello, World!|| Manas</h1>
    </div>
  );
}

// This is not working because the object keys are not same as the react original html => object convert syntax , this is a object made by me
const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

// it will work because we are using React's rendering method to render the component. We pass the html element instead of object, react convert it into object an render it inside the root element
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Click me to visit Google
  </a>
);

// Varibale
const anotherUser = "Manas2";

//This is the structure of Object which react convert after taking html from us
// React.createElement is use to create Elements
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "visit Google",
  anotherUser,
);

createRoot(document.getElementById("root")).render(
  //  reactElement
  // anotherElement

  // MyApp()
  <App />, //If we pass a function we have use </> or () but for object we don't have to use any thing simple use it
);
