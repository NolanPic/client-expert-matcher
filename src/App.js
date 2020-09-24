import React, { useState } from "react";
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
  // with no assigned clients.
  // It will eventually look like:
  // [ expert: [client, client], expert: [client]]
  const [matched, setMatched] = useState(
    experts.map((expert) => ({
      ...expert,
      assignedClients: [],
    }))
  );

  return (
    // experts do not need a set state, because they do not change
    <ExpertContext.Provider value={experts}>
      <ClientContext.Provider value={[unmatchedClients, setUnmatchedClients]}>
        <MatchContext.Provider value={[matched, setMatched]}>
          <div className="App">
            <nav>
              <NavLink exact to="/">
                Unmatched
              </NavLink>
              <NavLink to="matched">Matched</NavLink>
            </nav>
            <div className="container">
              <Switch>
                <Route path="/matched">
                  <Matched />
                </Route>
                <Route exact path="/">
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
