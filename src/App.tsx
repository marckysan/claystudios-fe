import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Meet from "./pages/meet/meet";
import Seek from "./pages/seek/seek";
import Us from "./pages/us/us";
import Yours from "./pages/yours/yours";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/yours">
        <Yours />
      </Route>
      <Route exact path="/seek">
        <Seek />
      </Route>
      <Route exact path="/us">
        <Us />
      </Route>
      <Route exact path="/meet">
        <Meet />
      </Route>
    </div>
  );
}

export default App;
