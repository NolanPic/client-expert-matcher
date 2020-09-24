import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import clients from "./data/clients";
import experts from "./data/experts";
import { NavLink, Switch, Route } from "react-router-dom";
import ClientContext from "./contexts/ClientContext";
import ExpertContext from "./contexts/ExpertContext";
import MatchContext from "./contexts/MatchContext";
import Unmatched from "./pages/Unmatched";
import Matched from "./pages/Matched";

function App() {
  // set up state to pass to providers
  const [unmatchedClients, setUnmatchedClients] = useState(clients);

  // initially, matched will be a list of experts
  // with no assigned clients
  const [matched, setMatched] = useState(
    experts.map((expert) => ({
      ...expert,
      assignedClients: [],
    }))
  );

  // experts do not need a set state, because they do not change

  return (
    <ExpertContext.Provider value={experts}>
      <ClientContext.Provider value={[unmatchedClients, setUnmatchedClients]}>
        <MatchContext.Provider value={[matched, setMatched]}>
          <div className="App">
            <NavLink to="/">Unmatched</NavLink>
            <NavLink to="matched">Matched</NavLink>
            <div className="container">
              <Switch>
                <Route path="/matched">
                  <Matched />
                </Route>
                <Route path="/">
                  <Unmatched />
                </Route>
              </Switch>
            </div>
          </div>
        </MatchContext.Provider>
      </ClientContext.Provider>
    </ExpertContext.Provider>
  );
}

export default App;
