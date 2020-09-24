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

    // matches is a list of lists:
    // [ expert: [client, client], expert: [client]]

    const newExpert = matches.find((m) => m.id === expert.id);

    selectedClients.forEach((client) => {
      newExpert.assignedClients.push(client);
    });
    // update this expert's record
    setMatches([newExpert, ...matches.filter((m) => m.id !== expert.id)]);

    // remove the newly matched clients from unmatched
    setUnmatchedClients(
      unmatchedClients.filter((unmatched) => {
        // find the client and remove them
        const found = selectedClients.find((c) => c.id === unmatched.id);

        // if they were found, filter them out--otherwise keep them in
        return found ? false : true;
      })
    );

    // reset selected clients state
    setSelectedClients([]);
  };

  return (
    <div className="unmatched-page">
      <div>
        <h2>Unmatched Clients</h2>
        <UnmatchedClientList
          clients={unmatchedClients}
          onClientSelected={onClientSelected}
        />
      </div>
      <div>
        <h2>Experts</h2>
        <ExpertsList
          experts={experts}
          assignClientsToExpert={assignClientsToExpert}
          selectedClientCount={selectedClients.length}
        />
      </div>
    </div>
  );
};

export default Unmatched;
