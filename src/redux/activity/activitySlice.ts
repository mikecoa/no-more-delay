import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { activityData } from "@utils/data";

interface ActivityState {
  joinedActivities: {
    id: number;
    name:string
  }[];
}

const initialState: ActivityState = {
  joinedActivities: [{ id: activityData[0].id, name:activityData[0].name }],
};

export const authSlice = createSlice({
  initialState,
  name: "activity",
  reducers: {
    clearActivity: () => initialState,
    setActivities: (state, action: PayloadAction<{ id: number, name:string }[]>) => ({
      joinedActivities: [...action.payload],
    }),
  },
});

// Action creators are generated for each case reducer function
export const { clearActivity, setActivities } = authSlice.actions;

export default authSlice.reducer;
