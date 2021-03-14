import { MovieType } from "../types";
import {
  ActionsType,
  SET_MOVIES,
  SET_SEARCH_SET,
  CHANGE_PAGE,
  ISFETCHING_CHANGE,
  SET_TOTAL_RESULTS,
  SET_SEARCH,
  SET_TABS,
} from "./actionsType";

export const setMovie = (movies: Array<MovieType>): ActionsType => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setSearchSet = (
  genre: number,
  sort: string,
  year: number
): ActionsType => ({
  type: SET_SEARCH_SET,
  payload: { genre, sort, year },
});

export const changePage = (page: number): ActionsType => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const isFetchingChange = (bool: boolean): ActionsType => ({
  type: ISFETCHING_CHANGE,
  payload: bool,
});

export const setTotalResults = (total: number): ActionsType => ({
  type: SET_TOTAL_RESULTS,
  payload: total,
});

export const setSearchPanel = (searchText: string): ActionsType => ({
  type: SET_SEARCH,
  payload: searchText,
});

export const setTab = (tab: string): ActionsType => ({
  type: SET_TABS,
  payload: tab,
});
