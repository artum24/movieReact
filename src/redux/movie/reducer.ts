import { MovieType } from "../types";
import {
  ActionsType,
  CHANGE_PAGE,
  ISFETCHING_CHANGE,
  SET_MOVIES,
  SET_SEARCH,
  SET_SEARCH_SET,
  SET_TABS,
  SET_TOTAL_RESULTS,
} from "./actionsType";

type InitialStateType = {
  movies: Array<MovieType>;
  genre: number;
  sort: string;
  year: number;
  page: number;
  isFetching: boolean;
  total_results: number;
  search: string;
  tab: string;
};

let initialState: InitialStateType = {
  movies: [],
  genre: 1,
  sort: "popularity.desc",
  year: 2020,
  page: 1,
  isFetching: true,
  total_results: 0,
  search: "",
  tab: "popular",
};

const movieReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case SET_SEARCH_SET: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case ISFETCHING_CHANGE: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    case SET_TOTAL_RESULTS: {
      return {
        ...state,
        total_results: action.payload,
      };
    }
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SET_TABS: {
      return {
        ...state,
        tab: action.payload,
        search: "",
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
