import { ActorImagesType, ActorType, MovieType } from "../types";
import {
  ActionsType,
  IS_FETCHING,
  SET_ACTOR,
  SET_ACTORS_MOVIE,
  SET_ACTORS_IMAGE,
} from "./actionsType";

export const setActor = (detail: ActorType): ActionsType => ({
  type: SET_ACTOR,
  payload: detail,
});

export const chengeIsFetchin = (fetch: boolean): ActionsType => ({
  type: IS_FETCHING,
  payload: fetch,
});

export const setActorsMovie = (movie: Array<MovieType>): ActionsType => ({
  type: SET_ACTORS_MOVIE,
  payload: movie,
});

export const setActorImage = (data: Array<ActorImagesType>): ActionsType => ({
  type: SET_ACTORS_IMAGE,
  payload: data,
});
