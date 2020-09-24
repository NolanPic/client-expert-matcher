import React, { useContext } from "react";
import MatchContext from "../contexts/MatchContext";

const Matched = () => {
  const [matches] = useContext(MatchContext);

  return matches.length ? (
    <ul className="match-list">
      {matches.map((match) => (
        <li key={match.client.id}>
          {match.client.firstName + " " + match.client.lastName} is matched with{" "}
          {match.expert.firstName + " " + match.expert.lastName}
        </li>
      ))}
    </ul>
  ) : (
    <p>No matches have been made</p>
  );
};

export default Matched;
