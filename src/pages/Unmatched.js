import React, { useContext, useState } from "react";
import ClientContext from "../contexts/ClientContext";
import ExpertContext from "../contexts/ExpertContext";
import MatchContext from "../contexts/MatchContext";
import UnmatchedClientList from "../components/UnmatchedClientsList";
import ExpertsList from "../components/ExpertsList";

const Unmatched = () => {
  // get the unmatched clients from the client context
  const [unmatchedClients, setUnmatchedClients] = useContext(ClientContext);

  // get the experts from the expert context
  const experts = useContext(ExpertContext);

  // get the matches from the matches context
  const [matches, setMatches] = useContext(MatchContext);

  // keep a list of all the clients that are selected
  const [selectedClients, setSelectedClients] = useState([]);

  const onClientSelected = (selected, client) => {
    if (selected) {
      // if the client was selected, add to state
      setSelectedClients([...selectedClients, client]);
    } else {
      // if the client was deselected, remove from state
      setSelectedClients([
        ...selectedClients.filter(
          (selectedClient) =>
            // ensure this client is filtered out of selected
            client.id !== selectedClient.id
        ),
      ]);
    }
  };

  // assigns all of the selected clients to the expert provided
  const assignClientsToExpert = (expert) => {
    // set a match record for each client
    selectedClients.forEach((client) => {
      setMatches([...matches, { client, expert }]);
    });
  };

  return (
    <div>
      <UnmatchedClientList
        clients={unmatchedClients}
        onClientSelected={onClientSelected}
      />
      <ExpertsList
        experts={experts}
        assignClientsToExpert={assignClientsToExpert}
        selectedClientCount={selectedClients.length}
      />
    </div>
  );
};

export default Unmatched;
