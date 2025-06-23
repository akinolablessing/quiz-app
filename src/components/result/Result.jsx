import React from "react";
import style from "../result/Result.module.css";

const Result = ({ score, total }) => {
    return (
        <div className={style.result}>
            <h2>Quiz Finished!</h2>
            <p>Your Score: {score} / {total}</p>
        </div>
    );
};

export default Result;
