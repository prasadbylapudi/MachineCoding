import React from "react";

const Question = ({ question, handleAnswer = () => {} }) => {
  console.log(question);
  return (
    <div className="questions">
      <h1>Q. {question.question}</h1>

      <ul className="options">
        {question.options.map((option, index) => {
          return (
            <li key={index}>
              <button onClick={() => handleAnswer(option.isCorrect)}>
                {option.option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
