import { MovieType } from "../types";

export const SET_MOVIES = "SET_MOVIES";
export const SET_SEARCH_SET = "SET_SEARCH_SET";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const ISFETCHING_CHANGE = "ISFETCHING_CHANGE";
export const SET_TOTAL_RESULTS = "SET_TOTAL_RESULTS";
export const SET_SEARCH = "SET_SEARCH";
export const SET_TABS = "SET_TABS";

export type ActionsType =
  | SetMovieType
  | SetSearchSetType
  | ChangePageType
  | IsFetchingChangeType
  | SetTotalResultsType
  | SetSearchPanelType
  | SetTabType;
  
type SetMovieType = {
  type: typeof SET_MOVIES;
  payload: Array<MovieType>;
};

type SetSearchSetType = {
  type: typeof SET_SEARCH_SET;
  payload: { genre: number; sort: string; year: number };
};

type ChangePageType = {
  type: typeof CHANGE_PAGE;
  payload: number;
};

type IsFetchingChangeType = {
  type: typeof ISFETCHING_CHANGE;
  payload: boolean;
};

type SetTotalResultsType = {
  type: typeof SET_TOTAL_RESULTS;
  payload: number;
};

type SetSearchPanelType = {
  type: typeof SET_SEARCH;
  payload: string;
};

type SetTabType = {
  type: typeof SET_TABS;
  payload: string;
};
