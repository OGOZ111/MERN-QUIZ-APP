import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

//redux store import

import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);
  const state = useSelector((state) => state);
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
      dispatch(PushAnswer(1));
    }
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
    console.log("button working");
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>

      {/*display question*/}
      <Questions onChecked={onChecked} />

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
