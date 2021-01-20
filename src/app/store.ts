import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { spinnerReducer } from "../components/Spinner/spinnerSlice";
import { languageReducer } from "../components/Language/languageSlice";
import { navigationReducer } from "../components/Navigation/navigationSlice";

export const store = configureStore({
  reducer: {
    spinner: spinnerReducer,
    language: languageReducer,
    page: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
