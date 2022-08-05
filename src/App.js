import React from "react";
import { BrowserRouter as Router, Switch, Route } from
"react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";

function App() {
  return (
    <Router>
    <div>
    <Nav/>

      <Switch>
          <Route path="/project">
          <ProjectPage/>
          </Route>

          <Route path="/">
          <HomePage/>
          </Route>
      </Switch>
      </div>
      </Router>
  );
}





export default App;
