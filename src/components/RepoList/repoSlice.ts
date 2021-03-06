import { Dispatch } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

import { serverUrl } from "../../app/constants";
import { showSpinner, hideSpinner } from "../Spinner/spinnerSlice";
import axios from "axios";

export interface RepoType {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  owner: {
    avatar_url: string;
  };
  description: string;
  stargazers_count: number;
  language: string;
  forks: number;
  is_favorite: boolean;
}

interface RepoState {
  list: RepoType[];
  listSlice: RepoType[];
  favorites: RepoType[];
  programmingLanguages: string[];
  currentProgrammingLanguage: string;
  query: string;
}

const initialState: RepoState = {
  list: [],
  listSlice: [],
  favorites: [],
  programmingLanguages: [],
  currentProgrammingLanguage: "",
  query: "",
};

export const repoSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    updateRepositories: (
      state: RepoState,
      action: PayloadAction<RepoType[]>
    ) => {
      state.list = action.payload;
    },
    populateSlice: (state: RepoState, action: PayloadAction<RepoType[]>) => {
      state.listSlice = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    addFavorite: (state: RepoState, action: PayloadAction<RepoType>) => {
      const i = state.list.findIndex((item) => item.id === action.payload.id);
      if (i > -1) {
        state.list[i] = { ...action.payload, is_favorite: true };
      }
      const j = state.listSlice.findIndex(
        (item) => item.id === action.payload.id
      );
      if (j > -1) {
        state.listSlice[j] = { ...action.payload, is_favorite: true };
      }
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state: RepoState, action: PayloadAction<RepoType>) => {
      const i = state.list.findIndex((item) => item.id === action.payload.id);
      if (i > -1) {
        state.list[i] = { ...action.payload, is_favorite: false };
      }

      const j = state.listSlice.findIndex(
        (item) => item.id === action.payload.id
      );
      if (j > -1) {
        state.listSlice[j] = { ...action.payload, is_favorite: false };
      }
      const updatedFavorites = state.favorites.filter(
        (item: RepoType) => item.id !== action.payload.id
      );
      state.favorites = [...updatedFavorites];
    },
    populateFavorites: (
      state: RepoState,
      action: PayloadAction<RepoType[]>
    ) => {
      state.favorites = action.payload;
    },
    populateProgrammingLanguages: (
      state: RepoState,
      action: PayloadAction<string[]>
    ) => {
      state.programmingLanguages = action.payload;
    },
    setProgrammingLanguage: (
      state: RepoState,
      action: PayloadAction<string>
    ) => {
      state.currentProgrammingLanguage = action.payload;
    },
  },
});

export const {
  updateRepositories,
  populateSlice,
  setQuery,
  addFavorite,
  removeFavorite,
  populateFavorites,
  populateProgrammingLanguages,
  setProgrammingLanguage,
} = repoSlice.actions;

export const listValue = (state: RootState) => state.repositories.list;
export const listSliceValue = (state: RootState) =>
  state.repositories.listSlice;
export const favoritesValue = (state: RootState) =>
  state.repositories.favorites;
export const programmingLanguagesValue = (state: RootState) =>
  state.repositories.programmingLanguages;
export const currentProgrammingLanguageValue = (state: RootState) =>
  state.repositories.currentProgrammingLanguage;

export const addToFavorites = (repo: RepoType) => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch(addFavorite(repo));
  const { repositories } = getState();
  localStorage.setItem("favorites", JSON.stringify(repositories.favorites));
};

export const removeFromFavorites = (repo: RepoType) => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch(removeFavorite(repo));
  const { repositories } = getState();
  localStorage.setItem("favorites", JSON.stringify(repositories.favorites));
};

export const updateSlice = () => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch(showSpinner());

  const { repositories } = getState();
  let listSlice: RepoType[] = repositories.list;

  if (repositories.currentProgrammingLanguage) {
    listSlice = repositories.list.filter(
      (r) => repositories.currentProgrammingLanguage === r.language
    );
  }
  const query = repositories.query;
  if (query.trim().length) {
    listSlice = listSlice.filter((r) => {
      const q = query.toLocaleLowerCase().trim();
      const n = r.name?.toLocaleLowerCase() ?? "";
      const fn = r.full_name?.toLocaleLowerCase() ?? "";
      const d = r.description?.toLocaleLowerCase() ?? "";
      return n.includes(q) || d.includes(q) || fn.includes(q);
    });
  }

  dispatch(populateSlice(listSlice));
  dispatch(hideSpinner());
};

export const fetchRepositories = (): AppThunk => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch(showSpinner());
  const { repositories } = getState();

  const d: Date = new Date();
  d.setDate(d.getDate() - 7);
  const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;

  const languages: string[] = [];

  try {
    const { data: repoTypeData } = await axios.get(
      `${serverUrl}search/repositories?q=created:>${date}&sort=stars&order=desc`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (repoTypeData.total_count) {
      const { favorites } = repositories;
      const ids = favorites.map((f) => f.id);
      const items = repoTypeData.items.map((r: RepoType) => {
        if (!languages.includes(r.language) && r.language?.length) {
          languages.push(r.language);
        }

        return {
          id: r.id,
          name: r.name,
          full_name: r.full_name,
          html_url: r.html_url,
          owner: {
            avatar_url: r.owner.avatar_url,
          },
          description: r.description,
          stargazers_count: r.stargazers_count,
          language: r.language,
          forks: r.forks,
          is_favorite: ids.includes(r.id),
        };
      });
      dispatch(updateRepositories(items));
      dispatch(populateSlice(items));
      dispatch(populateProgrammingLanguages(languages));
    }
  } catch (error) {
    console.log("NO RESULTS!");
    console.log(error);
  }
  dispatch(hideSpinner());
};

export const restoreFavorites = () => (dispatch: Dispatch) => {
  const savedFavorites = localStorage.getItem("favorites");

  try {
    if (savedFavorites) {
      const favorites = JSON.parse(savedFavorites);
      dispatch(populateFavorites(favorites));
    }
  } catch (error) {
    console.log("BROKEN FAVORITES!");
    console.log(error.response);
  }
};

export const { reducer: repoReducer } = repoSlice;
