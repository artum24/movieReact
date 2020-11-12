import {DetailActors} from '../api/api';
import { ActorImagesType, ActorType, MovieType } from './types';
import {ThunkAction} from 'redux-thunk';
import { AppStateType } from './store';
const SET_ACTOR = 'SET_ACTOR'
const IS_FETCHING = 'IS_FETCHING'
const SET_ACTORS_MOVIE = 'SET_ACTORS_MOVIE';
const SET_ACTORS_IMAGE = 'SET_ACTORS_IMAGE'
type initialStateType = {
    detail: ActorType ,
    isFetching: boolean,
    actorsMovie: Array<MovieType>,
    images: Array<ActorImagesType>
}

let initialState:initialStateType = {
    detail: {
        character: '',
        adult: false,
        also_known_as: [''],
        biography: '',
        birthday: '',
        deathday: '',
        gender: 0,
        homepage: '',
        id: 1,
        imdb_id: '',
        known_for_department: '',
        name: '',
        place_of_birth: '',
        popularity: 4,
        profile_path: ''
    },
    isFetching: true,
    actorsMovie: [],
    images: []
}

const DetailActorReducer = (state=initialState, action:ActionsType) => {
    switch (action.type) {
        case SET_ACTOR: {
            return {
                ...state,
                detail:action.payload
            }
        }
        case IS_FETCHING : {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_ACTORS_MOVIE : {
            return {
                ...state,
                actorsMovie: action.payload
            }
        }
        case SET_ACTORS_IMAGE : {
            return {
                ...state, 
                images: action.payload
            }
        }
        default: {
            return state
        }
    }
}
// types actions 
type ActionsType = SetActorType | ChengeIsFetchinType
|SetActorsMovieType | SetActorImageType

type SetActorType = {
    type: typeof SET_ACTOR,
    payload: ActorType
}

type ChengeIsFetchinType = {
    type: typeof IS_FETCHING,
    payload: boolean
}

type SetActorsMovieType = {
    type: typeof SET_ACTORS_MOVIE,
    payload: Array<MovieType>
}

type SetActorImageType = {
    type: typeof SET_ACTORS_IMAGE,
    payload: Array<ActorImagesType>
}
// actions

export const setActor = (detail:ActorType):SetActorType => ({
    type: SET_ACTOR,
    payload:detail
}) 

export const chengeIsFetchin = (fetch:boolean):ChengeIsFetchinType => ({
    type:IS_FETCHING,
    payload: fetch
})

export const setActorsMovie = (movie:Array<MovieType>):SetActorsMovieType => ({
    type: SET_ACTORS_MOVIE,
    payload: movie
})

export const setActorImage = (data:Array<ActorImagesType>):SetActorImageType => ({
    type: SET_ACTORS_IMAGE, 
    payload: data
})

// Thunks

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>


export const setActorDetailThunk = (id:number):ThunkType =>  async (dispatch) => {
    dispatch(chengeIsFetchin(true))
    let responceDetail = await DetailActors.getDetatilActor(id);
    dispatch(setActor(responceDetail.data));
    let responceActorMovie = await DetailActors.getActorMovie(id)
    dispatch(setActorsMovie(responceActorMovie.data.cast));
    let responceActorImage = await DetailActors.getActorImage(id)
    dispatch(setActorImage(responceActorImage.data.profiles))
    dispatch(chengeIsFetchin(false))
}

export default DetailActorReducer;

