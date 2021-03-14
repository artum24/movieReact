import { ActorType, DetailMovieType, MovieType, VideoType } from "../types";
import {
  ActionsType,
  CHENGE_IS_FETCHING,
  SET_ACTORS,
  SET_MOVIE,
  SET_RECOMENDATION,
  SET_VIDEOS,
} from "./actionsType";

type InitialStateType = {
  movie: DetailMovieType | null;
  actors: Array<ActorType>;
  isFetching: boolean;
  videos: Array<VideoType>;
  recomend: Array<MovieType>;
};

let initialState: InitialStateType = {
  movie: null,
  actors: [],
  isFetching: true,
  videos: [],
  recomend: [],
};

const DetailMovieReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case SET_MOVIE: {
      return {
        ...state,
        movie: action.payload,
      };
    }
    case CHENGE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    case SET_ACTORS: {
      return {
        ...state,
        actors: action.payload,
      };
    }
    case SET_VIDEOS: {
      return {
        ...state,
        videos: action.payload,
      };
    }
    case SET_RECOMENDATION: {
      return {
        ...state,
        recomend: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default DetailMovieReducer;
