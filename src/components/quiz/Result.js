import React from "react";

const Result = ({ answer, reStartQuiz }) => {
  const correctAnswer = answer?.filter((ans) => ans).length;
  return (
    <div className="text-center">
      <p className="font-bold mt-5">
        You have scored {correctAnswer} out of 10
      </p>
      <button
        className="bg-orange-300 rounded-md  mt-3 px-5 py-2"
        onClick={reStartQuiz}
      >
        Try Again
      </button>
    </div>
  );
};

export default Result;
