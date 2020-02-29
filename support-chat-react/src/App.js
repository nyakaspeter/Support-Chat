import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Home } from "./features/home/Home";
import { NotFound } from "./features/notfound/NotFound";
import { Layout } from "./features/layout/Layout";
import { NavigationBar } from "./features/navigationbar/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
