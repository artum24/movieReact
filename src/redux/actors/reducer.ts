import { ActorImagesType, ActorType, MovieType } from "../types";
import {
  ActionsType,
  IS_FETCHING,
  SET_ACTOR,
  SET_ACTORS_IMAGE,
  SET_ACTORS_MOVIE,
} from "./actionsType";

type initialStateType = {
  detail: ActorType;
  isFetching: boolean;
  actorsMovie: Array<MovieType>;
  images: Array<ActorImagesType>;
};

let initialState: initialStateType = {
  detail: {
    character: "",
    adult: false,
    also_known_as: [""],
    biography: "",
    birthday: "",
    deathday: "",
    gender: 0,
    homepage: "",
    id: 1,
    imdb_id: "",
    known_for_department: "",
    name: "",
    place_of_birth: "",
    popularity: 4,
    profile_path: "",
  },
  isFetching: true,
  actorsMovie: [],
  images: [],
};

const DetailActorReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_ACTOR: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    case SET_ACTORS_MOVIE: {
      return {
        ...state,
        actorsMovie: action.payload,
      };
    }
    case SET_ACTORS_IMAGE: {
      return {
        ...state,
        images: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default DetailActorReducer;
