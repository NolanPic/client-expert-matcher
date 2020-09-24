import React, { useContext } from "react";
import MatchContext from "../contexts/MatchContext";

const Matched = () => {
  const [matches] = useContext(MatchContext);

  return matches.length ? (
    <div className="match-list">
      <h2>Matched Clients</h2>
      <ul>
        {matches.map((expert) => (
          <li key={expert.id}>
            <span>
              {expert.firstName} {expert.lastName}
            </span>
            {expert.assignedClients.length ? (
              <ul className="assigned-list">
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
    </div>
  ) : (
    <p>No matches have been made</p>
  );
};

export default Matched;
