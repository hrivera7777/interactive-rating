import ThankYouIllustration from "../assets/illustration-thank-you.svg";

const ResultCard = ({ rating, handleResult }) => {
  return (
    <div className="bg-dark-blue h-98 w-98 my-auto rounded-3xl p-9">
      <img
        className="h-20 mx-auto mb-8"
        src={ThankYouIllustration}
        alt="thank-you"
      />
      <div className="text-orange-500 mb-8 mx-auto py-2 text-center bg-gray-600 w-48 h-9 rounded-3xl">
        You selected {rating} out of 5
      </div>
      <h2 className="text-white text-2xl mb-4 font-bold text-center">
        Thank you!
      </h2>
      <p className="text-gray-400 text-sm mb-7 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <button
        onClick={handleResult}
        className="bg-orange-500 font-bold tracking-wider text-white w-full rounded-3xl h-8"
      >
        rate again
      </button>
    </div>
  );
};

export default ResultCard;
