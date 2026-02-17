import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

//Question - Why we can't use onClick={setColor("red)}

// ans=>
// In React, you cannot use onClick={setColor("red")} because this syntax immediately invokes the setColor function during the render phase, rather than passing it as a callback to be executed when the button is clicked. When you write setColor("red"), JavaScript executes this function call right away, which changes the state, triggers a re-render, and creates an infinite loop (render → execute setColor → state change → re-render → repeat). Instead, you must pass a function reference or an arrow function like onClick={() => setColor("red")}, which tells React "call this function later when the user clicks the button." The arrow function creates a new function that wraps the setColor call, preventing immediate execution and only running when the onClick event fires. Essentially, onClick expects a function to call on the event, not the result of calling a function immediately.
