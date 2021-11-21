// import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Meet from "./pages/meet/meet";
import Seek from "./pages/seek/seek";
import Us from "./pages/us/us";
import Yours from "./pages/yours/yours";

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
    <div>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/yours">
        <Yours />
      </Route>
      <Route path="/seek">
        <Seek />
      </Route>
      <Route path="/us">
        <Us />
      </Route>
      <Route path="/meet">
        <Meet />
      </Route>
    </div>
  );
}

export default App;
