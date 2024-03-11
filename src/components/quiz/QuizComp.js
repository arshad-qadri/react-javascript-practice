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
