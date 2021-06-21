import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./layouts/Home";
import Descr from "./components/description/Descr";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/description" component={Descr} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default App;
