// import axios from "axios";
import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  // axios.get("http://localhost:6868/health").then(
  //   (response) => {
  //     console.log(response);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
