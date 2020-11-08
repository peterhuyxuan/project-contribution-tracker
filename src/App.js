import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContributionList from "./components/ContributionList";
import CreateContribution from "./components/CreateContribution";
import CreateUser from "./components/CreateUser";
import EditContribution from "./components/EditContribution";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Switch>
          <Route
            path="/edit/:id"
            render={(props) => <EditContribution {...props} />}
          />
          <Route path="/create" render={() => <CreateContribution />} />
          <Route path="/user" render={() => <CreateUser />} />
          <Route path="/" render={() => <ContributionList />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
