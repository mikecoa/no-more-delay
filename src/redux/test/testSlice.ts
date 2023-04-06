import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { IQuestion } from "@utils/types";

type TestState = "prelim" | "ongoing" | "finished";

interface TestSlice {
  testState: TestState;
  questionnaires: IQuestion[];
}

const initialState: TestSlice = {
  questionnaires: [
    { question: "You regularly make new friends." },
    {
      question:
        "You spend a lot of you free time exploring various random topics that pique your interest.",
    },
    {
      question:
        "Seeing other people cry can easily make you feel like you want to cry too.",
    },
  ],
  testState: "prelim",
};

export const testSlice = createSlice({
  initialState,
  name: "test",
  reducers: {
    clearTest: () => initialState,
    setAnswer: (state, action: PayloadAction<IQuestion[]>) => ({
      ...state,
      questionnaires: action.payload,
    }),
    setTestState: (state, action: PayloadAction<TestState>) => ({
      ...state,
      testState: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { clearTest, setAnswer, setTestState } = testSlice.actions;

export default testSlice.reducer;
