import React from "react";

const Question = ({ question, onAnserClicked, currentQuestion }) => {
  return (
    <div className="md:max-w-md max-w-full  flex flex-col justify-center items-center mt-5 gap-y-4 border p-4 mx-auto">
      <p>
        {currentQuestion + 1}. {question.question}
      </p>
      <ul className="grid grid-cols-2  w-full  gap-2">
        {question.answers.map((answer, index) => (
          <button
            className=" w-full active:bg-gray-300 bg-gray-200 rounded-md p-1 "
            key={index}
            onClick={() => onAnserClicked(answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Question;
