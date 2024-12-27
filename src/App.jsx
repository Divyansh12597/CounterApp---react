import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 15;

  //Add count function
  const addCount = () => {
    // counter++;
    // console.log("addCount", counter);
    setCounter(counter + 1);
  };

  //Decrease count function
  const decreaseCount = () => {
    // count--;
    // console.log("decreaseCount", counter);
    setCounter(counter - 1);
  };

  if (counter > 20)
  {
    setCounter(0, "Couner can't exceed more than 20")
  }
  if(counter < 0)
  {
    setCounter(0, "Counter can't get lower then 0")
  }

  return (
    <>
      <h1>Count: {counter} </h1>
      <button onClick={addCount}>Increase Count</button>
      <br />
      <button onClick={decreaseCount}>Decrease Count</button>
    </>
  );
}

export default App;
