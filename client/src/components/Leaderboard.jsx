import React from "react";
import { ResultTable } from "./ResultTable";
import { Link } from "react-router-dom";
import "../styles/Leadboard.css";

export const Leaderboard = () => {
  return (
    <div>
      <Link className="btn" to={"/"}>
        Return to Menu
      </Link>
      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
};
