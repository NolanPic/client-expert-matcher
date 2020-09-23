import React from "react";

const UnmatchedClientsList = ({ clients, onClientSelected }) => {
  return clients.length ? (
    <ul className="unmatched-clients-list">
      {/* normally I would never have firstName as a key--the key
            should always be a unique ID */}
      {clients.map((client) => (
        <li key={client.firstName}>
          <span>
            {client.firstName} {client.lastName}
          </span>
          <input
            type="checkbox"
            onChange={(e) => onClientSelected(e.target.checked, client)}
          />
        </li>
      ))}
    </ul>
  ) : null;
};

export default UnmatchedClientsList;
