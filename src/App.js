import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import clients from "./data/clients";
import experts from "./data/experts";
import ClientContext from "./contexts/ClientContext";
import ExpertContext from "./contexts/ExpertContext";
import MatchContext from "./contexts/MatchContext";

function App() {
  // set up state to pass to providers
  const [unmatchedClients, setUnmatchedClients] = useState(clients);

  // initially, no one is matched
  const [matched, setMatched] = useState([]);

  // experts do not need a set state, because they do not change

  return (
    <ExpertContext.Provider value={experts}>
      <ClientContext.Provider value={[unmatchedClients, setUnmatchedClients]}>
        <MatchContext.Provider value={[matched, setMatched]}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </MatchContext.Provider>
      </ClientContext.Provider>
    </ExpertContext.Provider>
  );
}

export default App;
