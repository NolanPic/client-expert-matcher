import React from "react";

const ExpertsList = ({
  experts,
  assignClientsToExpert,
  selectedClientCount,
}) => {
  return experts.length ? (
    <ul className="experts-list">
      {experts.map((expert) => (
        <li key={expert.firstName}>
          <span>expert.firstName + expert.lastName</span>
          <button
            disabled={selectedClientCount === 0}
            onClick={(e) => assignClientsToExpert(e)}
          >
            Assign
          </button>
        </li>
      ))}
    </ul>
  ) : null;
};

export default ExpertsList;
