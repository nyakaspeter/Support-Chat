import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Crisp } from "./components/Crisp";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router forceRefresh={true}>
      <NavigationBar />
      <Switch>
        <Route exact path="/crisp" component={Crisp} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
