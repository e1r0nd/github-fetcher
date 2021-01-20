/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface NavigationStateType {
  loading: boolean;
  pageTitle: string;
}

export const navigationSlice = createSlice({
  name: "page",
  initialState: {
    loading: false,
    pageTitle: "",
  } as NavigationStateType,
  reducers: {
    updatePageTitle: (state, action) => {
      state.pageTitle = action.payload;
    },
  },
});

export const { updatePageTitle } = navigationSlice.actions;

export const pageTitleValue = (state: RootState) => state.page.pageTitle;

export const { reducer: navigationReducer } = navigationSlice;
