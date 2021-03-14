import { ActorImagesType, ActorType, MovieType } from "../types";

export const SET_ACTOR = "SET_ACTOR";
export const IS_FETCHING = "IS_FETCHING";
export const SET_ACTORS_MOVIE = "SET_ACTORS_MOVIE";
export const SET_ACTORS_IMAGE = "SET_ACTORS_IMAGE";

export type ActionsType =
  | SetActorType
  | ChengeIsFetchinType
  | SetActorsMovieType
  | SetActorImageType;

type SetActorType = {
  type: typeof SET_ACTOR;
  payload: ActorType;
};

type ChengeIsFetchinType = {
  type: typeof IS_FETCHING;
  payload: boolean;
};

type SetActorsMovieType = {
  type: typeof SET_ACTORS_MOVIE;
  payload: Array<MovieType>;
};

type SetActorImageType = {
  type: typeof SET_ACTORS_IMAGE;
  payload: Array<ActorImagesType>;
};
