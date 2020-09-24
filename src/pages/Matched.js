import React, { useContext } from "react";
import MatchContext from "../contexts/MatchContext";

const Matched = () => {
  const [matches] = useContext(MatchContext);

  return matches.length ? (
    <ul className="match-list">
      {matches.map((expert) => (
        <li key={expert.id}>
          {expert.firstName} {expert.lastName}:
          {expert.assignedClients.length ? (
            <ul>
              {expert.assignedClients.map((client) => (
                <li key={client.id}>
                  {client.firstName} {client.lastName}
                </li>
              ))}
            </ul>
          ) : (
            <p>No clients assigned</p>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <p>No matches have been made</p>
  );
};

export default Matched;
