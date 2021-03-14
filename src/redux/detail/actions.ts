import { ActorType, DetailMovieType, MovieType, VideoType } from "../types";
import {
  ActionsType,
  SET_MOVIE,
  CHENGE_IS_FETCHING,
  SET_ACTORS,
  SET_VIDEOS,
  SET_RECOMENDATION,
} from "./actionsType";

export const setMovie = (movie: DetailMovieType): ActionsType => ({
  type: SET_MOVIE,
  payload: movie,
});

export const chengeIsFetchin = (bool: boolean): ActionsType => ({
  type: CHENGE_IS_FETCHING,
  payload: bool,
});

export const setActors = (actors: Array<ActorType>): ActionsType => ({
  type: SET_ACTORS,
  payload: actors,
});

export const setVideos = (videos: Array<VideoType>): ActionsType => ({
  type: SET_VIDEOS,
  payload: videos,
});

export const setRecomendation = (recomend: Array<MovieType>): ActionsType => ({
  type: SET_RECOMENDATION,
  payload: recomend,
});
