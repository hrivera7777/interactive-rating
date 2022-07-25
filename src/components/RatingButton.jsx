import React from "react";
import PropTypes from "prop-types";

const RatingButton = ({ rating, number, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        rating === number
          ? "bg-orange-500 text-white"
          : "bg-gray-600 text-gray-400"
      } h-12 w-12 rounded-full flex justify-center text-lg hover:text-white hover:bg-gray-400`}
    >
      <span className="m-auto">{number}</span>
    </button>
  );
};

RatingButton.propTypes = {
  number: PropTypes.number.isRequired,
};

export default RatingButton;
