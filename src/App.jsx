import React, {useState } from "react";
import Quiz from "../src/components/quiz/Quiz.jsx";
import Result from "../src/components/result/Result.jsx";
import questionsData from "../src/components/data/questions.json"

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    const nextIndex = currentIndex + 1;
    if (nextIndex < questionsData.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
      <div className="App">
        {!showResult ? (
            <Quiz
                question={questionsData[currentIndex]}
                currentIndex={currentIndex}
                total={questionsData.length}
                onAnswer={handleAnswer}
            />
        ) : (
            <Result score={score} total={questionsData.length} />
        )}
      </div>
  );
}

export default App;
