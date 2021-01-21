import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  restoreFavorites,
  fetchRepositories,
} from "./components/RepoList/repoSlice";

export function InitApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restoreFavorites());
    dispatch(fetchRepositories());
  });

  return null;
}
