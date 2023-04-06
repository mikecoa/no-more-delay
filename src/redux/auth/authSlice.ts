import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  hasTested: boolean;
  username: string;
  password: string;
}

const initialState: AuthState = {
  hasTested: false,
  password: "",
  username: "",
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    clearAuth: () => initialState,
    setAuth: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
    setHasTested: (state, action: PayloadAction<boolean>) => ({
      ...state,
      hasTested: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { clearAuth, setHasTested, setAuth } = authSlice.actions;

export default authSlice.reducer;
