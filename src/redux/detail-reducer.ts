import {DetailMovie} from '../api/api';
import { AppStateType } from './store';
import {ThunkAction} from 'redux-thunk';
import { ActorType, DetailMovieType, MovieType,VideoType } from './types';

const SET_MOVIE = 'SET_MOVIE';
const CHENGE_IS_FETCHING = 'CHENGE_IS_FETCHING';
const SET_ACTORS = 'SET_ACTORS';
const SET_VIDEOS = 'SET_VIDEOS';
const SET_RECOMENDATION = 'SET_RECOMENDATION';

type InitialStateType = {
    movie: DetailMovieType | null,
    actors: Array<ActorType>,
    isFetching: boolean,
    videos: Array<VideoType>,
    recomend: Array<MovieType>
}

let initialState:InitialStateType = {
    movie: null,
    actors: [],
    isFetching: true,
    videos: [],
    recomend:[],
}

const DetailMovieReducer = (state=initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case SET_MOVIE: {
            return {
                ...state,
                movie:action.payload
            }
        }
        case CHENGE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_ACTORS: {
            return {
                ...state,
                actors: action.payload
            }
        }
        case SET_VIDEOS : {
            return {
                ...state,
                videos: action.payload
            }
        }
        case SET_RECOMENDATION:{
            return ({
                ...state,
                recomend: action.payload
            })
        }
        default: {
            return state
        }
    }
}

// actions type
type ActionsType = SetMovieType | ChengeIsFetchinType | 
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

// actions
export const setMovie = (movie:DetailMovieType):SetMovieType => ({
    type: SET_MOVIE,
    payload:movie
}) 

export const chengeIsFetchin = (bool:boolean):ChengeIsFetchinType => ({
    type:CHENGE_IS_FETCHING,
    payload: bool
})

export const setActors = (actors:Array<ActorType>):SetActorsType => ({
    type:SET_ACTORS,
    payload: actors
})

export const setVideos = (videos:Array<VideoType>):SetVideosType => ({
    type: SET_VIDEOS,
    payload: videos
})

export const setRecomendation = (recomend:Array<MovieType>):SetRecomendationType => ({
    type:SET_RECOMENDATION,
    payload: recomend
})


// Thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const setMovieThunk = (id:number):ThunkType =>  async (dispatch) => {
    dispatch(chengeIsFetchin(true))

    let responceDetail = await DetailMovie.getDetailMovie(id);
    dispatch(setMovie(responceDetail.data));

    let responceActor = await DetailMovie.getActorsMovie(id);
    dispatch(setActors(responceActor.data.cast));

    let responceVideo = await DetailMovie.getVideoMovie(id);
    dispatch(setVideos(responceVideo.data.results));

    let responce = await DetailMovie.getRecomendationMovie(id);
    dispatch(setRecomendation(responce.data.results));

    dispatch(chengeIsFetchin(false))
}

export default DetailMovieReducer;

