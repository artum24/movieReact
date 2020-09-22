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

