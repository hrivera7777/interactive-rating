import { useState } from "react";
import Star from "../assets/icon-star.svg";
import RatingButton from "./RatingButton";

const ratingNumbers = [1, 2, 3, 4, 5];

const RatingCard = ({ rating, handleRating, handleResult }) => {
  const handleClick = (e) => {
    handleRating(+e.target.innerText);
  };
  return (
    <div className="bg-dark-blue h-98 w-98 my-auto rounded-3xl p-9">
      <div className="bg-gray-600 h-12 w-12 rounded-full flex justify-center mb-7">
        <img className="m-auto" src={Star} alt="star" />
      </div>
      <h2 className="text-white text-2xl mb-4">How did we do?</h2>
      <p className="text-gray-400 text-sm mb-7">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex flex-row justify-between mb-7">
        {ratingNumbers.map((number) => (
          <RatingButton
            rating={rating}
            number={number}
            key={number}
            handleClick={handleClick}
          />
        ))}
      </div>
      <button
        onClick={handleResult}
        className="bg-orange-500 font-bold tracking-wider text-white w-full rounded-3xl h-10"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default RatingCard;
