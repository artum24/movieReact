import {DetailMovie} from '../components/api/api';

let initialState = {
    movie: {},
    actors: [],
    isFetching: true,
    videos: [],
    recomend:[],
}

const DetailMovieReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIE': {
            return {
                ...state,
                movie:action.payload
            }
        }
        case 'CHENGE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case 'SET_ACTORS': {
            return {
                ...state,
                actors: action.payload
            }
        }
        case 'SET_VIDEOS' : {
            return {
                ...state,
                videos: action.payload
            }
        }
        case 'SET_RECOMENDATION':{
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

export const setMovie = (movie) => ({
    type: 'SET_MOVIE',
    payload:movie
}) 
export const chengeIsFetchin = (bool) => ({
    type:'CHENGE_IS_FETCHING',
    payload: bool
})
export const setActors = (actors) => ({
    type:'SET_ACTORS',
    payload: actors
})

export const setVideos = (videos) => ({
    type: 'SET_VIDEOS',
    payload: videos
})
export const setRecomendation = (recomend) => ({
    type:'SET_RECOMENDATION',
    payload: recomend
})

export const setMovieThunk = (id) =>  async (dispatch) => {
    dispatch(chengeIsFetchin(true))
    let responce = await DetailMovie.getDetailMovie(id);
    dispatch(setMovie(responce.data));
    dispatch(chengeIsFetchin(false))
}
export const setActorsThunk = (id) => async (dispatch) => {
    dispatch(chengeIsFetchin(true))
    let responce = await DetailMovie.getActorsMovie(id);
    dispatch(setActors(responce.data.cast));
    dispatch(chengeIsFetchin(false))
}
export const setVideosThunk = (id) => async (dispatch) => {
    dispatch(chengeIsFetchin(true))
    let responce = await DetailMovie.getVideoMovie(id);
    dispatch(setVideos(responce.data.results));
    dispatch(chengeIsFetchin(false))
}
export const setRecomendThunk = (id) => async (dispatch) => {
    dispatch(chengeIsFetchin(true))
    let responce = await DetailMovie.getRecomendationMovie(id);
    dispatch(setRecomendation(responce.data.results));
    dispatch(chengeIsFetchin(false))
}

// getRecomendationMovie
export default DetailMovieReducer;

