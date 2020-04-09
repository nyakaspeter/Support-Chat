import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { NotFound } from "./navigation/NotFound";
import { Crisp } from "./crisp/Crisp";
import { Rocket } from "./rocket/Rocket";
import { NavigationBar } from "./navigation/NavigationBar";

function App() {
  return (
    <Router forceRefresh={true}>
      <NavigationBar />
      <Switch>
        <Route exact path="/crisp" component={Crisp} />
        <Route exact path="/rocket" component={Rocket} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
