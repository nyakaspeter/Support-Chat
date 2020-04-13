import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { NavigationBar } from "./components/NavigationBar";
import {
  Comparison,
  Crisp,
  Fresh,
  HubSpot,
  Respond,
  Tawk,
  LiveHelper,
  Riot,
  Rocket,
  Zammad,
} from "./components/Pages";

function App() {
  return (
    <Router forceRefresh={true}>
      <NavigationBar />
      <Switch>
        <Route exact path="/comparison" component={Comparison} />
        <Route exact path="/crisp" component={Crisp} />
        <Route exact path="/fresh" component={Fresh} />
        <Route exact path="/hubspot" component={HubSpot} />
        <Route exact path="/livehelper" component={LiveHelper} />
        <Route exact path="/respond" component={Respond} />
        <Route exact path="/riot" component={Riot} />
        <Route exact path="/rocket" component={Rocket} />
        <Route exact path="/tawk" component={Tawk} />
        <Route exact path="/zammad" component={Zammad} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
