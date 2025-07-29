import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  // let counter  = 15
  let [message,setMessage] = useState("Working")

  const addValue = () => {
    console.log(counter);

    if (counter < 20) {
      counter += 1
      console.log("Increased", counter);
      setCounter(counter);
      message = `Increased to ${counter}`
      setMessage(message)
    } else {
      message = "Counter can't be greater than 20"
      setMessage(message)
    }
  };
  const decreaseValue = () => {
    if (counter > 0) {
      counter -= 1;
      console.log("Decreased", counter);
      setCounter(counter);
      message = `Decreased to ${counter}`
      setMessage(message)
    }
    else{
    message =  "counter can't be negative"
    setMessage(message)
    }
  };
  return (
    <>
      <h1>counter project</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Increment Value {counter}</button>
      &nbsp;&nbsp;
      <button onClick={decreaseValue}>Decrement Value {counter}</button>
      <h2>{message}</h2>
    </>
  );
}

export default App;
