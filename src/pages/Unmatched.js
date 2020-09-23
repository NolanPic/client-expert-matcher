import React, { useContext, useState } from "react";
import ClientContext from "../contexts/ClientContext";
import ExpertContext from "../contexts/ExpertContext";
import UnmatchedClientList from "../components/UnmatchedClientsList";
import ExpertsList from "../components/ExpertsList";

const Unmatched = () => {
  // get the unmatched clients from the client context
  const [unmatchedClients, setUnmatchedClients] = useContext(ClientContext);

  // get the experts from the expert context
  const experts = useContext(ExpertContext);

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
            // ensure this exact client is removed from selected
            client.firstName + client.lastName !==
            selectedClient.firstName + selectedClient.lastName
        ),
      ]);
    }
  };

  const assignClientsToExpert = (expert) => {
    console.log(expert);
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
