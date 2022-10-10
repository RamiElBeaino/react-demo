import {React, useState} from "react"
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0)

  const onClickStart = () => {
    setCounter(counter+1)
  }

  return (
    <div className="app">
      <div className="top">
        <p className="application">My Stopwatch</p>
        <p className="artist">By @TheCutieR7</p>
      </div>
      <div className="body">
        <div className="clock">
          <div className="timer">00 : 0{counter}</div>
          <div className="buttons">
            <button className="start button" onClick={onClickStart}>Start</button>
            <button className="stop button">Stop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
