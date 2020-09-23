import React, { useContext, useState } from "react";
import UnmatchedClientList from "../components/UnmatchedClientsList";
import ClientContext from "../contexts/ClientContext";

const Unmatched = () => {
  // get the unmatched clients from the client context
  const [unmatchedClients, setUnmatchedClients] = useContext(ClientContext);

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

  return (
    <div>
      <UnmatchedClientList
        clients={unmatchedClients}
        onClientSelected={onClientSelected}
      />
    </div>
  );
};

export default Unmatched;
