import React from "react";

const UnmatchedClientsList = ({ clients, onClientSelected }) => {
  return clients.length ? (
    <ul className="unmatched-clients-list">
      {clients.map((client) => (
        <li key={client.id}>
          <label htmlFor={`client${client.id}`}>
            {client.firstName} {client.lastName}
          </label>
          <input
            id={`client${client.id}`}
            type="checkbox"
            onChange={(e) => onClientSelected(e.target.checked, client)}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>All clients have been assigned!</p>
  );
};

export default UnmatchedClientsList;
