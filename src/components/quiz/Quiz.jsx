
import React, { useEffect, useState } from "react";
import style from "../quiz/Quiz.module.css";

const Quiz = ({ question, currentIndex, total, onAnswer }) => {
    const [secondsLeft, setSecondsLeft] = useState(20);

    useEffect(() => {
        setSecondsLeft(20);
        const timer = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    onAnswer(false);
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [question]);

    const handleAnswer = (option) => {
        const isCorrect = option === question.answer;
        onAnswer(isCorrect);
    };

    return (
        <div className={style.quiz}>
            <h2>Question {currentIndex + 1} of {total}</h2>
            <p className={style.questionText}>{question.question}</p>
            <div className={style.options}>
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
            <p className={style.timer}>Time left: {secondsLeft}s</p>
        </div>
    );
};

export default Quiz;
