import React from "react";

const ExpertsList = ({
  experts,
  assignClientsToExpert,
  selectedClientCount, // if there are 0 clients selected, disable the Assign btn
}) => {
  const onAssign = (e, expert) => {
    e.preventDefault();
    assignClientsToExpert(expert);
  };

  return experts.length ? (
    <ul className="experts-list">
      {experts.map((expert) => (
        <li key={expert.id}>
          <span>
            {expert.firstName} {expert.lastName}
          </span>
          <button
            disabled={selectedClientCount === 0}
            onClick={(e) => onAssign(e, expert)}
          >
            Assign
          </button>
        </li>
      ))}
    </ul>
  ) : null;
};

export default ExpertsList;
