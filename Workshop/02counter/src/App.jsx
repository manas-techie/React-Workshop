import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(10);
  // let counter = 10;

  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1);
      counter = counter + 1;
      setCounter(counter);
      console.log("Value added", counter);
    }
  };

  const substractValue = () => {
    if (counter > 0) {
      // setCounter(counter - 1);
      counter = counter - 1;
      setCounter(counter);
      console.log("Value substracted", counter);
    }
  };

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={substractValue}>Subtract Value {counter}</button>
    </>
  );
}

export default App;
