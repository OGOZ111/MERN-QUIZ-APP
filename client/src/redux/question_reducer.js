import { createSlice } from "@reduxjs/toolkit";

// create reducer with initial value
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0, // this value changes the index of the questions in the array
  },
  reducers: {
    startExamAction: (state, action) => {
      let { question, answers } = action.payload;
      return {
        ...state,
        queue: action.payload,
      };
    },

    // following function updates the trace value for the index of the questions in array
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },

    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
  },
});

export const { startExamAction, moveNextAction, movePrevAction } =
  questionReducer.actions;

export default questionReducer.reducer;
