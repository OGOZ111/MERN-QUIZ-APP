import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import { ResultTable } from "./ResultTable";

export const Result = () => {
  function onRestart() {
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
