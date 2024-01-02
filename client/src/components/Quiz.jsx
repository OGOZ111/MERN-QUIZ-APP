import React, { useEffect } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";

//redux store import

import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  //const trace = useSelector((state) => state.questions.trace);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  });

  //Button event handler for next and prev buttons
  function onNext() {
    console.log("button working");
    if (trace < queue.length) {
      // Update the trace value by +1, which moves to the next index in the array of questions using move next action
      dispatch(MoveNextQuestion());
    }
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
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
}
