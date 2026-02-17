import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Manas",
    age: 20,
    city: "jaipur"
  }

  let arr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">TailWind Test</h1>
      <Card username="Manas" myArr={[1,2,3]}/>
      <Card someObj={myObj} myArr={arr} />
    </>
  );
}

export default App;
