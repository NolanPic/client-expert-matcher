import React from "react";

const UnmatchedClientsList = ({ clients, onClientSelected }) => {
  return clients.length ? (
    <ul className="unmatched-clients-list">
      {clients.map((client) => (
        <li key={client.id}>
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
