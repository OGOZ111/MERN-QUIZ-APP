import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

//redux store import

import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(state);
  });

  //Button event handler for next and prev buttons
  function onNext() {
    console.log("button working");
    if (trace < queue.length) {
      // Update the trace value by +1, which moves to the next index in the array of questions using move next action
      dispatch(MoveNextQuestion());

      // insert a new result in the array
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    //reset value of the checked value
    setChecked(undefined);
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

  // finished exam after last question
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>

      {/*display question*/}
      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}

        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
