import React from "react";
import QuizComp from "../components/quiz/QuizComp";
import Main from "../components/Main";

const Quiz = () => {
const code = `
import React, { useState } from "react";
import question from "./questions.json";
import Question from "./Question";
import Reslut from '../quiz/Result'

const QuizComp = () => {
  const [currentQuestion, setCrrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const handleAnswer = (ans) => {
    setAnswers((prev) => [...prev, ans]);
    setCrrentQuestion((prev) => prev + 1);
  };
  const handleRestart = ()=>{
    setAnswers([])
    setCrrentQuestion(0)
  }
  return (
    <div>
      <h1 className="text-center">Quiz App</h1>
      {/* Display Question */}

      {currentQuestion < question.length && <Question
        question={question[currentQuestion]}
        onAnserClicked={handleAnswer}
        currentQuestion={currentQuestion}
      />}
      {currentQuestion===question.length&&
      <Reslut answer={answers} reStartQuiz={handleRestart} />}
    </div>
  );
};

export default QuizComp;

// Question Component
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

// Result component
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
`
  return (
    <div>
      <Main Component={QuizComp} code={code}></Main>
    </div>
  );
};

export default Quiz;
