import React, { useEffect } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import { ResultTable } from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
// import actions to reset values for restart game

import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

export const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log(result);
  });

  const totalPoints = queue.length * 10;

  //const attempt =

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
    console.log("restarted");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Luke</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points: </span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions: </span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Total attempts: </span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Earned Points:</span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold">Passed</span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
      <div className="container">
        {/**Result table from back end */}
        <ResultTable />
      </div>
    </div>
  );
};
