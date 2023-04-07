import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  paymentDetail: false,
  userDetail: false,
};

export type ModalState = typeof initialState

export const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    clearModal: () => initialState,
    setModal: (state, action:PayloadAction<ModalState>) => ({ ...state, ...action.payload }),
  },
});

// Action creators are generated for each case reducer function
export const { clearModal, setModal } = modalSlice.actions;

export default modalSlice.reducer;
