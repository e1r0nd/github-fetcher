import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { useStyles } from "./styles";
import {
  setProgrammingLanguage,
  updateSlice,
  programmingLanguagesValue,
  currentProgrammingLanguageValue,
  setQuery,
} from "../RepoList/repoSlice";
import { localValue } from "../../components/Language/languageSlice";
import { locals } from "../../app/locals";

export function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const local = useSelector(localValue);
  const programmingLanguages = useSelector(programmingLanguagesValue);
  const currentProgrammingLanguage = useSelector(
    currentProgrammingLanguageValue
  );

  function changeProgrammingLanguage(
    event: React.ChangeEvent<{ value: unknown }>
  ) {
    dispatch(setProgrammingLanguage(event.target.value as string));
    dispatch(updateSlice());
  }

  function handleSearch(event: React.ChangeEvent<{ value: unknown }>) {
    dispatch(setQuery(event.target.value as string));
    dispatch(updateSlice());
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="search-field"
        label={locals[local].search.searchquery}
        className={classes.searchField}
        onChange={handleSearch}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="lang-label">{locals[local].search.language}</InputLabel>
        <Select
          labelId="lang-label"
          id="lang-select"
          value={currentProgrammingLanguage}
          onChange={changeProgrammingLanguage}
        >
          <MenuItem value="" key="all" selected></MenuItem>
          {programmingLanguages.map((lang) => (
            <MenuItem value={lang} key={lang}>
              {lang}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}
