import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface LanguageState {
  local: "en" | "ru";
}

const initialState: LanguageState = {
  local: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.local = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const localValue = (state: RootState) => state.language.local;

export const { reducer: languageReducer } = languageSlice;
