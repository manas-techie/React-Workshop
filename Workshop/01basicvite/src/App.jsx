 import Chai from "./Chai.jsx";

function App() {
  const username = "Manas"; //variable that can be changed
  
  return (
    <>
      <h1>Hello World !! {username}</h1> {/* This is a JSX expression that will render the value of the username variable inside the h1 tag. */}
      <Chai />
    </>
  );
}

export default App;
