import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface SpinnerState {
  visible: boolean;
}

const initialState: SpinnerState = {
  visible: false,
};

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    showSpinner: (state) => {
      state.visible = true;
    },
    hideSpinner: (state) => {
      state.visible = false;
    },
  },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;

export const isVisibleValue = (state: RootState) => state.spinner.visible;

export const { reducer: spinnerReducer } = spinnerSlice;
