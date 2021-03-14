import { ThunkAction } from "redux-thunk";
import { MovieApi } from "../../api/api";
import { AppStateType } from "../store";
import { isFetchingChange, setMovie, setTotalResults } from "./actions";
import { ActionsType } from "./actionsType";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const setMoviesThunk = (
  genre: number,
  sort: string,
  year: number,
  page: number
): ThunkType => async (dispatch) => {
  dispatch(isFetchingChange(true));
  let responce = await MovieApi.getMovies(genre, sort, year, page);
  if (responce.status === 200) {
    dispatch(setMovie(responce.data.results));
    dispatch(setTotalResults(responce.data.total_results));
    dispatch(isFetchingChange(false));
  }
};

export const setTabThunk = (tab: string, page: number): ThunkType => async (
  dispatch
) => {
  dispatch(isFetchingChange(true));
  let responce = await MovieApi.getTabsMovie(tab, page);
  if (responce.status === 200) {
    dispatch(setMovie(responce.data.results));
    dispatch(setTotalResults(responce.data.total_results));
    dispatch(isFetchingChange(false));
  }
};

export const searchMoviesThunk = (
  query: string,
  page: number
): ThunkType => async (dispatch) => {
  dispatch(isFetchingChange(true));
  let responce = await MovieApi.search(query, page);
  if (responce.status === 200) {
    dispatch(setMovie(responce.data.results));
    dispatch(setTotalResults(responce.data.total_results));
    dispatch(isFetchingChange(false));
  }
};
