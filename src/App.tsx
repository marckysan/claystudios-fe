import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Meet from "./pages/meet/meet";
import Seek from "./pages/seek/seek";
import Us from "./pages/us/us";
import Yours from "./pages/yours/yours";
import YoursDomain from "./pages/yoursDomain/yoursDomain";
import YoursFloralvale from "./pages/yoursFloralvale/yoursFloralvale";
import YoursPunggol from "./pages/yoursPunggol/yoursPunggol";
import YoursTaman from "./pages/yoursTaman/yoursTaman";
import YoursVibes from "./pages/yoursVibes/yoursVibes";
import YoursWaterfrontGold from './pages/yoursWaterfrontGold/yoursWaterfrontGold';

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/yours">
        <Yours />
      </Route>
      <Route exact path="/yours/vibesAtEastCoast">
        <YoursVibes />
      </Route>
      <Route exact path="/yours/floralvale">
        <YoursFloralvale />
      </Route>
      <Route exact path="/yours/tamanSelamat">
        <YoursTaman />
      </Route>
      <Route exact path="/yours/domain21">
        <YoursDomain />
      </Route>
      <Route exact path="/yours/308BPunggolWalk">
        <YoursPunggol />
      </Route>
      <Route exact path="/yours/waterfrontGold">
        <YoursWaterfrontGold />
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
