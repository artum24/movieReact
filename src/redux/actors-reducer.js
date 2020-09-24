import {DetailActors} from '../components/api/api';

let initialState = {
    detail: [],
    isFetching: true,
    actorsMovie: [],
    images: []
}

const DetailActorReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_ACTOR': {
            return {
                ...state,
                detail:action.payload
            }
        }
        case 'IS_FETCHING' : {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case 'SET_ACTORS_MOVIE' : {
            return {
                ...state,
                actorsMovie: action.payload
            }
        }
        case 'SET_ACTORS_IMAGE' : {
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

export const setActor = (detail) => ({
    type: 'SET_ACTOR',
    payload:detail
}) 
export const chengeIsFetchin = (fetch) => ({
    type:'IS_FETCHING',
    payload: fetch
})
export const setActorsMovie = (movie) => ({
    type: 'SET_ACTORS_MOVIE',
    payload: movie
})
export const setActorImage = (data) => ({
    type: 'SET_ACTORS_IMAGE', 
    payload: data
})
export const setActorDetailThunk = (id) =>  async (dispatch) => {
    dispatch(chengeIsFetchin(true))
    let responceDetail = await DetailActors.getDetatilActor(id);
    dispatch(setActor(responceDetail.data));
    let responceActorMovie = await DetailActors.getActorMovie(id)
    dispatch(setActorsMovie(responceActorMovie.data.cast));
    let responceActorImage = await DetailActors.getActorImage(id)
    console.log(responceActorImage.data.profiles);
    dispatch(setActorImage(responceActorImage.data.profiles))
    dispatch(chengeIsFetchin(false))
}

export default DetailActorReducer;

