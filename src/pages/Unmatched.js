import React, { useContext } from "react";
import UnmatchedClientList from "../components/UnmatchedClientsList";
import ClientContext from "../contexts/ClientContext";

const Unmatched = () => {
  // get the unmatched clients from the client context
  const [unmatchedClients, setUnmatchedClients] = useContext(ClientContext);

  return (
    <div>
      <UnmatchedClientList clients={unmatchedClients} />
    </div>
  );
};

export default Unmatched;
