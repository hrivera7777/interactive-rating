import { useState } from "react";
import RatingCard from "../components/RatingCard";
import ResultCard from "../components/ResultCard";

const MainPage = () => {
  const [rating, setRating] = useState();
  const [result, setResult] = useState(false);
  const handleRating = (rating) => {
    setRating(rating);
  };
  const handleResult = (e) => {
    e.target.innerText === "SUBMIT" ? setResult(true) : setResult(false);
  };

  return (
    <div className="bg-darkness-blue h-screen w-screen grid justify-center">
      {result ? (
        <ResultCard rating={rating} handleResult={handleResult} />
      ) : (
        <RatingCard
          rating={rating}
          handleRating={handleRating}
          handleResult={handleResult}
        />
      )}
    </div>
  );
};

export default MainPage;
