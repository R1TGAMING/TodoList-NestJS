import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TrashButton = () => {
  return (
    <button className="cursor-pointer hover:text-red-400 hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default TrashButton;
