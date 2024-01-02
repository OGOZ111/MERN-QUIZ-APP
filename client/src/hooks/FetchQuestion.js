// fetch question hook to fetch API data and set value to store

import { useState } from "react";
import data, { answers } from "../database/data";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// redux action
import * as Action from "../redux/question_reducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    // async function to fetch backend data
    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: { question, answers } }));

          /** dispatch an action */
          dispatch(Action.startExamAction({ question, answers }));
        } else {
          throw new Error("No Question Avalibale");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};

// moveaction dispatch function
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); // increase trace by +1 by using MoveNext Action
  } catch (error) {
    console.log(error);
  }
};

// Prev Action dispatch function
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction()); // decrease trace by -1 by using MovePrev Action
  } catch (error) {
    console.log(error);
  }
};
