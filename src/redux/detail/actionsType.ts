import { ActorType, DetailMovieType, MovieType, VideoType } from "../types";

export const SET_MOVIE = 'SET_MOVIE';
export const CHENGE_IS_FETCHING = 'CHENGE_IS_FETCHING';
export const SET_ACTORS = 'SET_ACTORS';
export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_RECOMENDATION = 'SET_RECOMENDATION';

export type ActionsType = SetMovieType | ChengeIsFetchinType | 
SetActorsType | SetVideosType | SetRecomendationType

type SetMovieType = {
    type: typeof SET_MOVIE,
    payload: DetailMovieType
}

type ChengeIsFetchinType = {
    type: typeof CHENGE_IS_FETCHING,
    payload: boolean
}

type SetActorsType = {
    type: typeof SET_ACTORS,
    payload: Array<ActorType>
}

type SetVideosType = {
    type: typeof SET_VIDEOS,
    payload: Array<VideoType>
}

type SetRecomendationType = {
    type: typeof SET_RECOMENDATION,
    payload: Array<MovieType>
}