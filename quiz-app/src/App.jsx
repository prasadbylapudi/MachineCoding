import { useState } from "react";
import { questions } from "./questions";
import "./App.css";
import Question from "./Question";
import Result from "./Result";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (isCorrect) => {
    console.log(isCorrect);
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
    console.log(userAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {currentQuestion < questions.length && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
      <button onClick={resetQuiz}>Reset Quiz</button>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}

      {/* Result Component */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
