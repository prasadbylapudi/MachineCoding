import React from "react";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  console.log(userAnswers, questions);
  return (
    <div>
      {questions.map((question, i) => {
        console.log(question);
        return (
          <div key={i}>
            <h4
              data-correct={userAnswers[i]}
              className={`question ${userAnswers[i] ? "correct" : "incorrect"}`}
            >
              Q {i + 1}.{question.question}
            </h4>
            <h2></h2>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
