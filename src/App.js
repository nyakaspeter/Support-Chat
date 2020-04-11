import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PostScribe } from "react-postscribe";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { NavigationBar } from "./components/NavigationBar";
import { MarkdownComponent } from "./components/MarkdownComponent";

function App() {
  return (
    <Router forceRefresh={true}>
      <NavigationBar />
      <Switch>
        <Route
          exact
          path="/comparison"
          render={() => (
            <MarkdownComponent markdown="Comparison.md" script="" />
          )}
        />
        <Route
          exact
          path="/crisp"
          render={() => (
            <>
              <PostScribe
                html={`<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="670945d4-b6dd-4da9-888c-b670986576d2";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>`}
              />
              <MarkdownComponent markdown="Crisp.md" />
            </>
          )}
        />
        <Route
          exact
          path="/fresh"
          render={() => <MarkdownComponent markdown="Fresh.md" />}
        />
        <Route
          exact
          path="/hubspot"
          render={() => <MarkdownComponent markdown="Hubspot.md" />}
        />
        <Route
          exact
          path="/livehelper"
          render={() => <MarkdownComponent markdown="Livehelper.md" />}
        />
        <Route
          exact
          path="/respond"
          render={() => <MarkdownComponent markdown="Respond.md" />}
        />
        <Route
          exact
          path="/riot"
          render={() => <MarkdownComponent markdown="Riot.md" />}
        />
        <Route
          exact
          path="/rocket"
          render={() => <MarkdownComponent markdown="Rocket.md" />}
        />
        <Route
          exact
          path="/tawk"
          render={() => <MarkdownComponent markdown="Tawk.md" />}
        />
        <Route
          exact
          path="/zammad"
          render={() => <MarkdownComponent markdown="Zammad.md" />}
        />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
