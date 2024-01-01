import React, { useEffect } from "react";
import { Questions } from "./Questions";

//redux store import

import { useSelector } from "react-redux";

export const Quiz = () => {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  });

  //Button event handler for next and prev buttons
  function onNext() {
    console.log("button working");
  }

  function onPrev() {
    console.log("button working");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>

      {/*display question*/}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};
