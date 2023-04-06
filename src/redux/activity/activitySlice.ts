import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ActivityState {
  joinedActivities: {
    id: number;
  }[];
}

const initialState: ActivityState = {
  joinedActivities: [{ id: 1 }],
};

export const authSlice = createSlice({
  initialState,
  name: "activity",
  reducers: {
    clearActivity: () => initialState,
    setActivities: (state, action: PayloadAction<{ id: number }[]>) => ({
      joinedActivities: [...action.payload],
    }),
  },
});

// Action creators are generated for each case reducer function
export const { clearActivity, setActivities } = authSlice.actions;

export default authSlice.reducer;
