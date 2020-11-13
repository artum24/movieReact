import {MovieApi} from '../api/api';
import { MovieType } from './types';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './store';
const SET_MOVIES = 'SET_MOVIES';
const SET_SEARCH_SET = 'SET_SEARCH_SET';
const CHANGE_PAGE = 'CHANGE_PAGE';
const ISFETCHING_CHANGE = 'ISFETCHING_CHANGE';
const SET_TOTAL_RESULTS = 'SET_TOTAL_RESULTS';
const SET_SEARCH = 'SET_SEARCH';
const SET_TABS = 'SET_TABS';
type InitialStateType = {
    movies: Array<MovieType>,
    genre: number,
    sort: string,
    year: number,
    page: number,
    isFetching: boolean,
    total_results: number,
    search: string,
    tab: string,
}

let initialState:InitialStateType = {
    movies: [],
    genre:1,
    sort:'popularity.desc',
    year:2020,
    page:1,
    isFetching: true,
    total_results:0,
    search:'',
    tab: 'popular'
}

const movieReducer = (state=initialState, action:ActionsType):InitialStateType => {
    switch(action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                movies: action.payload,
            }
        }
        case SET_SEARCH_SET: {
            return {
                ...state,
                ...action.payload
            }
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                page:action.payload
            }
        }
        case ISFETCHING_CHANGE: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_TOTAL_RESULTS: {
            return {
                ...state,
                total_results: action.payload
            }
        }
        case SET_SEARCH: {
            return {
                ...state,
                search: action.payload
            }
        }
        case SET_TABS : {
            return {
                ...state,
                tab: action.payload
            }
        }
        default: 
        return state;
    }
}

// artions type
type ActionsType = SetMovieType | SetSearchSetType | ChangePageType
| IsFetchingChangeType | SetTotalResultsType | SetSearchPanelType
| SetTabType;
type SetMovieType = {
    type: typeof SET_MOVIES,
    payload: Array<MovieType>
}

type SetSearchSetType = {
    type : typeof SET_SEARCH_SET,
    payload: {genre: number, sort: string, year: number}
}

type ChangePageType = {
    type: typeof CHANGE_PAGE,
    payload: number
}

type IsFetchingChangeType = {
    type: typeof ISFETCHING_CHANGE, 
    payload: boolean
}

type SetTotalResultsType = {
    type: typeof SET_TOTAL_RESULTS,
    payload: number
}

type SetSearchPanelType = {
    type: typeof SET_SEARCH,
    payload: string
}

type SetTabType = {
    type: typeof SET_TABS,
    payload: string
}
// actions

export const setMovie = (movies:Array<MovieType>):SetMovieType => ({
    type:SET_MOVIES,
    payload: movies
})

export const setSearchSet = (genre:number,sort:string,year:number):SetSearchSetType => ({
    type:SET_SEARCH_SET,
    payload: {genre,sort,year}
})

export const changePage = (page:number):ChangePageType => ({
    type: CHANGE_PAGE,
    payload: page
})

export const isFetchingChange = (bool:boolean):IsFetchingChangeType => ({
    type:ISFETCHING_CHANGE,
    payload: bool
});

export const setTotalResults = (total:number):SetTotalResultsType => ({
    type:SET_TOTAL_RESULTS,
    payload: total
})

export const setSearchPanel = (searchText:string):SetSearchPanelType => ({
    type:SET_SEARCH,
    payload:searchText
})

export const setTab = (tab:string):SetTabType => ({
    type :SET_TABS,
    payload: tab
})


// Thunks 
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>


export const setMoviesThunk = (genre:number,sort:string,year:number,page: number):ThunkType => async (dispatch) => {
    dispatch(isFetchingChange(true))
    let responce = await MovieApi.getMovies(genre,sort,year,page)
    if(responce.status === 200) {
        dispatch(setMovie(responce.data.results))
        dispatch(setTotalResults(responce.data.total_results))
        dispatch(isFetchingChange(false))
    }
}
export const setTabThunk = (tab:string,page:number):ThunkType => async (dispatch) => {
    dispatch(isFetchingChange(true))
    let responce = await MovieApi.getTabsMovie(tab,page)
    if(responce.status === 200) {
        dispatch(setMovie(responce.data.results))
        dispatch(setTotalResults(responce.data.total_results))
        dispatch(isFetchingChange(false))
    }
}
export const searchMoviesThunk = (query:string,page:number):ThunkType => async (dispatch) => {
    dispatch(isFetchingChange(true))
    let responce = await MovieApi.search(query,page);
    if (responce.status === 200) {
        dispatch(setMovie(responce.data.results))
        dispatch(setTotalResults(responce.data.total_results))
        dispatch(isFetchingChange(false))
    }
}

export default movieReducer;