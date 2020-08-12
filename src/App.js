import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {/*using react router we will switch the pages*/}
        <Switch>
          <Route path="/chat">
            <h1>Chat Page</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
        {/* header */}

        {/* react card*/}
        {/* chatting menu*/}
      </Router>
    </div>
  );
}

export default App;
